(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const state = {
    page: "beranda",
    filter: "semua",
    query: "",
    quiz: null,
  };

  const pages = ["beranda", "verben", "tata", "latihan", "kuis"];

  function speak(text) {
    if (!text || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "de-DE";
    u.rate = 0.92;
    u.pitch = 1;
    u.volume = 1;
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find((v) =>
      /de-DE|German|Deutsch/i.test(`${v.lang} ${v.name}`) &&
      /Hedda|Katja|Anna|Petra|Google|Natural|Neural|Online/i.test(v.name)
    ) || voices.find((v) => /de-DE|German|Deutsch/i.test(`${v.lang} ${v.name}`));
    if (preferred) u.voice = preferred;
    window.speechSynthesis.speak(u);
  }
  window.speechSynthesis?.addEventListener("voiceschanged", () => {});

  function uniqueVerbs() {
    const map = new Map();
    (window.VERBS || []).forEach((v) => {
      if (!map.has(v.inf)) map.set(v.inf, v);
    });
    return [...map.values()].sort((a, b) => a.inf.localeCompare(b.inf, "de"));
  }

  const VERBS = uniqueVerbs();

  function go(page) {
    state.page = page;
    pages.forEach((p) => $(`#page-${p}`)?.classList.toggle("hidden", p !== page));
    $$("nav button").forEach((b) => b.classList.toggle("active", b.dataset.page === page));
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (page === "verben") renderVerbs();
    if (page === "tata") renderGrammar();
  }

  function renderVerbs() {
    const q = state.query.trim().toLowerCase();
    const list = VERBS.filter((v) => {
      const okLv = state.filter === "semua" || v.lv === state.filter ||
        (state.filter === "modal" && v.typ === "Modalverb") ||
        (state.filter === "trennbar" && v.sep) ||
        (state.filter === "unreg" && (v.typ === "unregelmäßig" || v.typ === "gemischt"));
      const blob = `${v.inf} ${v.id} ${v.en} ${v.typ}`.toLowerCase();
      return okLv && (!q || blob.includes(q));
    });
    $("#verb-count").textContent = `${list.length} verba`;
    $("#verb-grid").innerHTML = list.map((v) => `
      <button class="card verb-card" data-inf="${v.inf}">
        <div class="inf">${v.inf}</div>
        <div class="muted">${v.id}</div>
        <div class="meta">
          <span class="tag">${v.lv}</span>
          <span class="tag">${v.typ}</span>
          <span class="tag">${v.aux}</span>
        </div>
      </button>
    `).join("") || `<p class="muted">Tidak ditemukan. Coba cari di kotak “kata kerja belum diketahui” di atas.</p>`;
    $$("#verb-grid [data-inf]").forEach((el) => {
      el.onclick = () => openVerb(el.dataset.inf);
    });
  }

  function guessRegular(inf) {
    let stem = inf;
    if (stem.endsWith("en")) stem = stem.slice(0, -2);
    else if (stem.endsWith("n")) stem = stem.slice(0, -1);
    const e = /[td]$/.test(stem) || /[mn][^aeiouäöühlr]$/.test(stem);
    const st = e ? "est" : "st";
    const t = e ? "et" : "t";
    return {
      inf,
      id: "(perkiraan regular — periksa kamus)",
      en: "",
      lv: "?",
      typ: "perkiraan regular",
      aux: "haben",
      sep: false,
      praes: {
        ich: stem + "e",
        du: stem + st,
        er: stem + t,
        wir: inf,
        ihr: stem + t,
        sie: inf,
      },
      praet: stem + (e ? "ete" : "te"),
      part: (/^(be|ge|er|ver|zer|ent|emp|miss)/.test(inf) ? "" : "ge") + stem + (e ? "et" : "t"),
      ex: [{ de: `Ich ${stem}e das.`, id: "Kalimat contoh generik — ganti sesuai arti." }],
      guessed: true,
    };
  }

  function openVerb(inf, guessed) {
    const v = VERBS.find((x) => x.inf === inf) || guessed || guessRegular(inf);
    const p = v.praes;
    $("#modal").classList.add("show");
    $("#modal-body").innerHTML = `
      <div class="row" style="justify-content:space-between">
        <div>
          <div class="eyebrow">${v.lv} · ${v.typ} · Perfekt dengan ${v.aux}</div>
          <h2>${v.inf}</h2>
          <p class="muted">${v.id}${v.en ? " · " + v.en : ""}</p>
        </div>
        <button class="icon-btn" id="say-inf" title="Dengar">♪</button>
      </div>
      ${v.guessed ? `<div class="note">Verba ini tidak ada di daftar A1–A2. Ini tebakan pola regular. Cek di
        <a href="https://de.wiktionary.org/wiki/${encodeURIComponent(v.inf)}" target="_blank" rel="noopener">Wiktionary</a>
        atau
        <a href="https://konjugator.reverso.net/konjugation-deutsch-verb-${encodeURIComponent(v.inf)}.html" target="_blank" rel="noopener">Reverso</a>.</div>` : ""}
      <div class="row" style="margin-top:14px">
        <button class="btn primary" id="say-full">Dengar infinitif</button>
        <button class="btn" id="say-ich">Dengar ich-form</button>
      </div>
      <table class="conj-table">
        <tr><th>Pronomina</th><th>Präsens</th></tr>
        <tr><td>ich</td><td>${p.ich}</td></tr>
        <tr><td>du</td><td>${p.du}</td></tr>
        <tr><td>er / sie / es</td><td>${p.er}</td></tr>
        <tr><td>wir</td><td>${p.wir}</td></tr>
        <tr><td>ihr</td><td>${p.ihr}</td></tr>
        <tr><td>sie / Sie</td><td>${p.sie}</td></tr>
      </table>
      <p style="margin-top:14px"><strong>Präteritum:</strong> ${v.praet} &nbsp; · &nbsp; <strong>Partizip II:</strong> ${v.aux} ${v.part}</p>
      <h3 style="margin-top:22px">Contoh kalimat</h3>
      ${(v.ex || []).map((e, i) => `
        <div class="example">
          <div class="row" style="justify-content:space-between">
            <div class="de">${e.de}</div>
            <button class="icon-btn say-ex" data-i="${i}">♪</button>
          </div>
          <div class="id">${e.id}</div>
        </div>
      `).join("")}
    `;
    $("#say-inf").onclick = () => speak(v.inf);
    $("#say-full").onclick = () => speak(v.inf);
    $("#say-ich").onclick = () => speak("ich " + p.ich.replace(/^ich /, ""));
    $$(".say-ex").forEach((b) => {
      b.onclick = () => speak(v.ex[+b.dataset.i].de);
    });
  }

  function renderGrammar() {
    const nav = $("#grammar-nav");
    nav.innerHTML = window.GRAMMAR.map((g) =>
      `<button class="chip" data-gid="${g.id}">${g.title}</button>`
    ).join("");
    const show = (id) => {
      const g = window.GRAMMAR.find((x) => x.id === id) || window.GRAMMAR[0];
      $$("#grammar-nav .chip").forEach((c) => c.classList.toggle("on", c.dataset.gid === g.id));
      $("#grammar-article").innerHTML = `<div class="eyebrow">${g.level}</div><h2>${g.title}</h2>${g.html}`;
    };
    $$("#grammar-nav .chip").forEach((c) => c.onclick = () => show(c.dataset.gid));
    show(window.GRAMMAR[0].id);
  }

  const DRILL = [
    { q: "Ich ___ aus Indonesien.", opts: ["komme", "kommt", "kommen", "kommst"], a: 0, tip: "ich + Präsens regular/kuat tanpa ubah vokal." },
    { q: "Wie ___ du?", opts: ["heißt", "heißen", "heiße", "heißt ihr"], a: 0, tip: "du-form dari heißen." },
    { q: "Wir ___ zwei Kinder.", opts: ["haben", "hat", "habt", "habe"], a: 0, tip: "wir memakai bentuk infinitif pada haben." },
    { q: "___ wohnst du?", opts: ["Wo", "Wer", "Was", "Wen"], a: 0, tip: "Wo = di mana." },
    { q: "Heute ___ ich Deutsch.", opts: ["lerne", "lerne ich", "lernt", "ich lerne"], a: 0, tip: "Setelah keterangan di posisi 1, verba tetap posisi 2, lalu subjek." },
    { q: "Ich habe ___ Auto.", opts: ["kein", "nicht", "neine", "kein das"], a: 0, tip: "kein untuk nomina." },
    { q: "Der Zug fährt um acht ___.", opts: ["ab", "an", "auf", "aus"], a: 0, tip: "abfahren — awalan terpisah di akhir." },
    { q: "Ich ___ um sechs auf.", opts: ["stehe", "steht", "stehen", "stand"], a: 0, tip: "aufstehen, ich stehe auf." },
    { q: "Kannst du ___ helfen?", opts: ["mir", "mich", "ich", "mein"], a: 0, tip: "helfen + Dativ." },
    { q: "Ich bleibe zu Hause, ___ ich müde bin.", opts: ["weil", "dass", "und", "oder"], a: 0, tip: "weil + verba di akhir." },
    { q: "Gestern ___ ich im Büro gewesen.", opts: ["bin", "habe", "war", "seid"], a: 0, tip: "sein + gewesen." },
    { q: "Wir ___ nach Berlin gefahren.", opts: ["sind", "haben", "seid", "hat"], a: 0, tip: "fahren = gerak, Perfekt dengan sein." },
    { q: "Das Buch liegt ___ dem Tisch.", opts: ["auf", "in", "an", "zu"], a: 0, tip: "auf + Dativ = lokasi di permukaan." },
    { q: "Ich gehe ___ die Küche.", opts: ["in", "im", "an", "auf"], a: 0, tip: "in + Akkusativ untuk gerak masuk." },
    { q: "___ Sie das bitte wiederholen?", opts: ["Könnten", "Kann", "Müsst", "Wollt"], a: 0, tip: "Bentuk sopan A2." },
    { q: "Am ___ gehe ich arbeiten.", opts: ["Montag", "Mai", "acht Uhr", "Sommer"], a: 0, tip: "am + hari." },
    { q: "Ich möchte einen ___.", opts: ["Kaffee", "Kaffees", "dem Kaffee", "des Kaffees"], a: 0, tip: "Akkusativ setelah möchte + artikel ein." },
    { q: "Sie ___ nicht rauchen.", opts: ["darf", "darfst", "dürft", "kannst"], a: 0, tip: "er/sie/es dari dürfen = darf." },
    { q: "Hast du den Film ___?", opts: ["gesehen", "gesehen haben", "sah", "seht"], a: 0, tip: "sehen → gesehen." },
    { q: "Wenn ich Zeit ___, lese ich.", opts: ["habe", "haben", "hat", "bin"], a: 0, tip: "wenn + verba di akhir." },
  ];

  function startDrill() {
    state.quiz = { type: "drill", i: 0, score: 0, items: shuffle([...DRILL]).slice(0, 10) };
    renderQuiz();
  }

  function startVocab() {
    const pool = shuffle(VERBS.filter((v) => v.id && !v.id.startsWith("("))).slice(0, 10);
    const items = pool.map((v) => {
      const wrong = shuffle(VERBS.filter((x) => x.inf !== v.inf)).slice(0, 3).map((x) => x.id);
      const opts = shuffle([v.id, ...wrong]);
      return { q: `Apa arti “${v.inf}”?`, opts, a: opts.indexOf(v.id), speak: v.inf, tip: v.ex?.[0]?.de || "" };
    });
    state.quiz = { type: "vocab", i: 0, score: 0, items };
    renderQuiz();
  }

  function startConj() {
    const pool = shuffle(VERBS.filter((v) => v.praes?.du && v.praes.du !== "—")).slice(0, 10);
    const items = pool.map((v) => {
      const correct = v.praes.du;
      const others = shuffle(VERBS.filter((x) => x.praes?.du && x.praes.du !== correct)).slice(0, 3).map((x) => x.praes.du);
      const opts = shuffle([correct, ...others]);
      return { q: `Bentuk du dari “${v.inf}”?`, opts, a: opts.indexOf(correct), speak: v.inf, tip: `ich ${v.praes.ich}, er ${v.praes.er}` };
    });
    state.quiz = { type: "conj", i: 0, score: 0, items };
    renderQuiz();
  }

  function renderQuiz() {
    const qz = state.quiz;
    const box = $("#quiz-box");
    if (!qz) {
      box.innerHTML = `<p class="muted">Pilih mode di atas untuk mulai.</p>`;
      return;
    }
    if (qz.i >= qz.items.length) {
      box.innerHTML = `
        <h2>Selesai</h2>
        <p class="lede">Skor ${qz.score} / ${qz.items.length}</p>
        <button class="btn primary" id="again">Ulangi</button>
      `;
      $("#again").onclick = () => {
        if (qz.type === "drill") startDrill();
        if (qz.type === "vocab") startVocab();
        if (qz.type === "conj") startConj();
      };
      return;
    }
    const item = qz.items[qz.i];
    box.innerHTML = `
      <div class="muted">Soal ${qz.i + 1} / ${qz.items.length} · skor ${qz.score}</div>
      <div class="progress"><span style="width:${(qz.i / qz.items.length) * 100}%"></span></div>
      <div class="row"><div class="q-text">${item.q}</div>
        ${item.speak ? `<button class="icon-btn" id="q-speak">♪</button>` : ""}</div>
      <div class="options">
        ${item.opts.map((o, i) => `<button class="option" data-i="${i}">${o}</button>`).join("")}
      </div>
      <p class="muted" id="q-tip"></p>
    `;
    $("#q-speak") && ($("#q-speak").onclick = () => speak(item.speak));
    $$(".option").forEach((b) => {
      b.onclick = () => {
        const i = +b.dataset.i;
        $$(".option").forEach((x) => x.disabled = true);
        if (i === item.a) {
          b.classList.add("correct");
          qz.score++;
        } else {
          b.classList.add("wrong");
          $$(".option")[item.a].classList.add("correct");
        }
        $("#q-tip").textContent = item.tip || "";
        setTimeout(() => { qz.i++; renderQuiz(); }, 900);
      };
    });
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function renderHomeStats() {
    $("#stat-verbs").textContent = VERBS.length;
    $("#stat-grammar").textContent = window.GRAMMAR.length;
  }

  function bind() {
    $$("nav button, [data-page]").forEach((b) => {
      b.addEventListener("click", (e) => {
        e.preventDefault();
        if (b.dataset.page) go(b.dataset.page);
      });
    });
    $("#q").addEventListener("input", (e) => {
      state.query = e.target.value;
      renderVerbs();
    });
    $$("#filters .chip").forEach((c) => {
      c.onclick = () => {
        state.filter = c.dataset.f;
        $$("#filters .chip").forEach((x) => x.classList.toggle("on", x === c));
        renderVerbs();
      };
    });
    $("#lookup-btn").onclick = () => {
      const raw = $("#lookup").value.trim().toLowerCase().replace(/^\s+|\s+$/g, "");
      if (!raw) return;
      const hit = VERBS.find((v) => v.inf === raw || v.inf.replace("ß", "ss") === raw);
      openVerb(hit ? hit.inf : raw, hit ? null : undefined);
    };
    $("#lookup").addEventListener("keydown", (e) => {
      if (e.key === "Enter") $("#lookup-btn").click();
    });
    $("#modal").addEventListener("click", (e) => {
      if (e.target.id === "modal") e.target.classList.remove("show");
    });
    $("#close-modal").onclick = () => $("#modal").classList.remove("show");
    $("#start-drill").onclick = startDrill;
    $("#start-vocab").onclick = startVocab;
    $("#start-conj").onclick = startConj;
    $("#go-drill").onclick = () => { go("latihan"); startDrill(); };
    $("#go-vocab").onclick = () => { go("latihan"); startVocab(); };
    $("#go-conj").onclick = () => { go("latihan"); startConj(); };
  }

  document.addEventListener("DOMContentLoaded", () => {
    bind();
    renderHomeStats();
    renderVerbs();
    renderGrammar();
    renderQuiz();
  });
})();
