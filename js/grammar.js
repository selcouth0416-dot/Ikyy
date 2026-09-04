window.GRAMMAR = [
  {
    id: "artikel",
    title: "Artikel & gender",
    level: "A1",
    html: `
      <p>Setiap nomina Jerman punya gender: maskulin (<em>der</em>), feminin (<em>die</em>), atau netral (<em>das</em>). Di A1, hafalkan artikel bersama katanya.</p>
      <table>
        <tr><th></th><th>Maskulin</th><th>Feminin</th><th>Netral</th><th>Plural</th></tr>
        <tr><td>Tentu</td><td>der Mann</td><td>die Frau</td><td>das Kind</td><td>die Kinder</td></tr>
        <tr><td>Tak tentu</td><td>ein Mann</td><td>eine Frau</td><td>ein Kind</td><td>—</td></tr>
        <tr><td>Negasi</td><td>kein Mann</td><td>keine Frau</td><td>kein Kind</td><td>keine Kinder</td></tr>
      </table>
      <div class="note">Tidak ada rumus sempurna. Pola bantuan: -ung, -heit, -keit, -tion hampir selalu <strong>die</strong>. -chen dan -lein hampir selalu <strong>das</strong>.</div>
      <p>Contoh: <em>Ich brauche einen Stift.</em> — Saya butuh sebuah pena.</p>`
  },
  {
    id: "kasus",
    title: "Kasus: Nominativ, Akkusativ, Dativ",
    level: "A1–A2",
    html: `
      <p>Goethe A1 menuntut Nominativ + Akkusativ. A2 menambahkan Dativ secara aktif.</p>
      <table>
        <tr><th>Kasus</th><th>Fungsi</th><th>Pertanyaan</th><th>Contoh</th></tr>
        <tr><td>Nominativ</td><td>subjek</td><td>wer? was?</td><td>Der Mann liest.</td></tr>
        <tr><td>Akkusativ</td><td>objek langsung</td><td>wen? was?</td><td>Ich sehe den Mann.</td></tr>
        <tr><td>Dativ</td><td>objek tak langsung</td><td>wem?</td><td>Ich gebe dem Mann das Buch.</td></tr>
      </table>
      <table>
        <tr><th></th><th>M</th><th>F</th><th>N</th><th>Pl</th></tr>
        <tr><td>Nom</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
        <tr><td>Akk</td><td>den</td><td>die</td><td>das</td><td>die</td></tr>
        <tr><td>Dat</td><td>dem</td><td>der</td><td>dem</td><td>den + n</td></tr>
      </table>
      <div class="note">Di Dativ plural, nomina biasanya mendapat -n: <em>den Kindern</em>.</div>`
  },
  {
    id: "praesens",
    title: "Präsens — kala kini",
    level: "A1",
    html: `
      <p>Akhiran regular: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.</p>
      <table>
        <tr><th></th><th>machen</th><th>arbeiten</th><th>fahren</th></tr>
        <tr><td>ich</td><td>mache</td><td>arbeite</td><td>fahre</td></tr>
        <tr><td>du</td><td>machst</td><td>arbeitest</td><td>fährst</td></tr>
        <tr><td>er/sie/es</td><td>macht</td><td>arbeitet</td><td>fährt</td></tr>
        <tr><td>wir</td><td>machen</td><td>arbeiten</td><td>fahren</td></tr>
        <tr><td>ihr</td><td>macht</td><td>arbeitet</td><td>fahrt</td></tr>
        <tr><td>sie/Sie</td><td>machen</td><td>arbeiten</td><td>fahren</td></tr>
      </table>
      <p>Verba berakhiran -t/-d mendapat -e- penyangga: <em>du arbeitest, er redet</em>.</p>
      <p>Verba kuat mengubah vokal pada du/er: <em>essen → er isst, sehen → sie sieht</em>.</p>`
  },
  {
    id: "seinhaben",
    title: "sein, haben, werden",
    level: "A1",
    html: `
      <table>
        <tr><th></th><th>sein</th><th>haben</th><th>werden</th></tr>
        <tr><td>ich</td><td>bin</td><td>habe</td><td>werde</td></tr>
        <tr><td>du</td><td>bist</td><td>hast</td><td>wirst</td></tr>
        <tr><td>er/sie/es</td><td>ist</td><td>hat</td><td>wird</td></tr>
        <tr><td>wir</td><td>sind</td><td>haben</td><td>werden</td></tr>
        <tr><td>ihr</td><td>seid</td><td>habt</td><td>werdet</td></tr>
        <tr><td>sie/Sie</td><td>sind</td><td>haben</td><td>werden</td></tr>
      </table>
      <p><em>sein</em> dan <em>haben</em> membentuk Perfekt. <em>werden</em> dipakai untuk Futur.</p>`
  },
  {
    id: "modal",
    title: "Modalverben",
    level: "A1–A2",
    html: `
      <p>Modal dikonjugasikan; verba utama tetap infinitif di akhir. <em>Ich kann Deutsch sprechen.</em></p>
      <table>
        <tr><th></th><th>können</th><th>müssen</th><th>wollen</th><th>sollen</th><th>dürfen</th><th>mögen</th></tr>
        <tr><td>ich</td><td>kann</td><td>muss</td><td>will</td><td>soll</td><td>darf</td><td>mag</td></tr>
        <tr><td>du</td><td>kannst</td><td>musst</td><td>willst</td><td>sollst</td><td>darfst</td><td>magst</td></tr>
        <tr><td>er</td><td>kann</td><td>muss</td><td>will</td><td>soll</td><td>darf</td><td>mag</td></tr>
      </table>
      <div class="note"><em>möchte</em> = ingin secara sopan: <em>Ich möchte einen Kaffee.</em> Sangat sering di ujian lisan Goethe.</div>`
  },
  {
    id: "trennbar",
    title: "Verba terpisah & tak terpisah",
    level: "A1–A2",
    html: `
      <p>Awalan terpisah (an-, auf-, aus-, ein-, mit-, vor-, zu-, weg-, zurück-) pindah ke akhir di Präsens.</p>
      <p><em>Ich stehe um sechs auf. Der Zug fährt um acht ab.</em></p>
      <p>Partizip II: awalan + ge + batang: <em>aufgestanden, angerufen</em>.</p>
      <p>Awalan tak terpisah (be-, ge-, er-, ver-, zer-, ent-, emp-) tidak pecah dan tanpa ge-: <em>verstehen → verstanden</em>.</p>`
  },
  {
    id: "wortstellung",
    title: "Urutan kata (V2)",
    level: "A1–A2",
    html: `
      <p>Verba berhingga selalu di posisi dua pada kalimat pernyataan.</p>
      <p><em>Ich lerne heute Deutsch. Heute lerne ich Deutsch.</em></p>
      <p>Ya/tidak: verba di depan. <em>Kommst du mit?</em></p>
      <p>Pertanyaan W: kata tanya + verba + subjek. <em>Wo wohnst du?</em></p>
      <p>Anak kalimat (weil, dass, wenn) menaruh verba di akhir: <em>Ich bleibe zu Hause, weil ich müde bin.</em></p>
      <div class="note">Urutan aman: Waktu – Cara – Tempat. <em>Ich fahre morgen mit dem Zug nach Berlin.</em></div>`
  },
  {
    id: "negation",
    title: "Negasi: nicht & kein",
    level: "A1",
    html: `
      <p><em>kein</em> di depan nomina: <em>Ich habe kein Auto.</em></p>
      <p><em>nicht</em> menegasikan verba, adjektiva, atau predikat: <em>Ich komme nicht. Das ist nicht teuer.</em></p>`
  },
  {
    id: "possessiv",
    title: "Possessivartikel",
    level: "A1",
    html: `
      <table>
        <tr><th>Pronomina</th><th>Possessif</th><th>Contoh</th></tr>
        <tr><td>ich</td><td>mein / meine</td><td>mein Name</td></tr>
        <tr><td>du</td><td>dein / deine</td><td>deine Adresse</td></tr>
        <tr><td>er / es</td><td>sein / seine</td><td>sein Bruder</td></tr>
        <tr><td>sie</td><td>ihr / ihre</td><td>ihre Tasche</td></tr>
        <tr><td>wir</td><td>unser / unsere</td><td>unsere Stadt</td></tr>
        <tr><td>ihr</td><td>euer / eure</td><td>eure Kinder</td></tr>
        <tr><td>sie / Sie</td><td>ihr / Ihre</td><td>Ihre Nummer</td></tr>
      </table>
      <p>Dideklinasikan seperti <em>ein</em>: <em>meinen Pass, meinem Freund</em>.</p>`
  },
  {
    id: "praepositionen",
    title: "Preposisi & waktu",
    level: "A1–A2",
    html: `
      <ul>
        <li><em>um</em> jam: um 8 Uhr</li>
        <li><em>am</em> hari / tanggal: am Montag</li>
        <li><em>im</em> bulan / musim: im Mai, im Sommer</li>
      </ul>
      <p>Akkusativ tetap: durch, für, gegen, ohne, um.</p>
      <p>Dativ tetap: aus, bei, mit, nach, seit, von, zu.</p>
      <p>Wechselpräpositionen A2: an, auf, hinter, in, neben, über, unter, vor, zwischen. Gerak → Akkusativ (<em>Ich gehe in die Küche</em>). Lokasi → Dativ (<em>Ich bin in der Küche</em>).</p>`
  },
  {
    id: "perfekt",
    title: "Perfekt",
    level: "A2",
    html: `
      <p>haben/sein + Partizip II. <em>Ich habe gearbeitet. Ich bin nach Hause gegangen.</em></p>
      <p><strong>sein</strong> untuk gerak berpindah dan perubahan keadaan, plus sein, bleiben, werden.</p>
      <p>Regular: gemacht, gelernt. Kuat: gesehen, geschrieben. Terpisah: aufgestanden. Tak terpisah: verstanden.</p>
      <div class="note">Präteritum wajib A2: war, hatte, gab, serta modal konnte, musste, wollte, sollte, durfte, mochte.</div>`
  },
  {
    id: "nebensatz",
    title: "Anak kalimat: weil, dass, wenn, ob",
    level: "A2",
    html: `
      <ul>
        <li>weil: Ich lerne, weil ich die Prüfung machen will.</li>
        <li>dass: Ich glaube, dass das richtig ist.</li>
        <li>wenn: Wenn ich Zeit habe, lese ich.</li>
        <li>ob: Weißt du, ob er kommt?</li>
      </ul>
      <p>Jika anak kalimat di depan: <em>Weil ich müde bin, bleibe ich zu Hause.</em></p>`
  },
  {
    id: "reflexiv",
    title: "Verba refleksif",
    level: "A2",
    html: `
      <p>mich, dich, sich, uns, euch, sich.</p>
      <p><em>Ich freue mich. Du interessierst dich für Musik. Wir treffen uns um acht.</em></p>
      <p>Contoh A2: sich fühlen, sich erinnern, sich anmelden, sich beeilen, sich waschen.</p>`
  },
  {
    id: "adjektiv",
    title: "Akhiran adjektiva",
    level: "A2",
    html: `
      <table>
        <tr><th></th><th>M</th><th>F</th><th>N</th><th>Pl</th></tr>
        <tr><td>Nom</td><td>der große Tisch</td><td>die große Tasche</td><td>das große Haus</td><td>die großen Häuser</td></tr>
        <tr><td>Akk</td><td>den großen Tisch</td><td>die große Tasche</td><td>das große Haus</td><td>die großen Häuser</td></tr>
        <tr><td>Dat</td><td>dem großen Tisch</td><td>der großen Tasche</td><td>dem großen Haus</td><td>den großen Häusern</td></tr>
      </table>
      <p>Komparatif: kleiner, teurer. Superlatif: am schnellsten. Tidak beraturan: gut–besser–am besten; gern–lieber–am liebsten.</p>`
  },
  {
    id: "imperativ",
    title: "Imperativ",
    level: "A1–A2",
    html: `
      <p>du: Komm! Warte! Sprich langsam!</p>
      <p>ihr: Kommt! Wartet!</p>
      <p>Sie: Kommen Sie! Warten Sie bitte!</p>
      <p>Terpisah: Steh auf! Mach das Fenster zu!</p>`
  },
  {
    id: "pronomen",
    title: "Pronomina personal",
    level: "A1–A2",
    html: `
      <table>
        <tr><th>Nom</th><th>Akk</th><th>Dat</th></tr>
        <tr><td>ich</td><td>mich</td><td>mir</td></tr>
        <tr><td>du</td><td>dich</td><td>dir</td></tr>
        <tr><td>er</td><td>ihn</td><td>ihm</td></tr>
        <tr><td>sie</td><td>sie</td><td>ihr</td></tr>
        <tr><td>es</td><td>es</td><td>ihm</td></tr>
        <tr><td>wir</td><td>uns</td><td>uns</td></tr>
        <tr><td>ihr</td><td>euch</td><td>euch</td></tr>
        <tr><td>sie/Sie</td><td>sie/Sie</td><td>ihnen/Ihnen</td></tr>
      </table>
      <p><em>Kannst du mir helfen? Ich sehe dich. Gefällt Ihnen das?</em></p>`
  },
  {
    id: "zahlen",
    title: "Angka, jam, tanggal",
    level: "A1",
    html: `
      <p>21 = einundzwanzig. Jam resmi: 8.15 Uhr. Jam sehari-hari: Viertel nach acht, halb neun, Viertel vor neun.</p>
      <p>Hari: am Montag. Bulan: im Januar. Tanggal: am 4. September.</p>`
  },
  {
    id: "konjunktiv",
    title: "Kalimat sopan",
    level: "A2",
    html: `
      <ul>
        <li>Ich möchte einen Termin.</li>
        <li>Könnten Sie das bitte wiederholen?</li>
        <li>Hätten Sie einen Moment?</li>
        <li>Würden Sie mir helfen?</li>
      </ul>
      <p>Cukup dikuasai sebagai rumus lisan, bukan teori Konjunktiv lengkap.</p>`
  }
];
