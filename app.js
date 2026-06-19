const lessonSource = [
  {
    title: "Úplný začátek: pozdravy, lidé, zdvořilost",
    summary: "Naučíš se pozdravit, rozloučit se, poděkovat a mluvit o sobě i o druhých.",
    words: `hola|ahoj|ola
adiós|sbohem|adjos
buenos días|dobré ráno / dobrý den|buenos días
buenas tardes|dobré odpoledne|buenas tardes
buenas noches|dobrý večer / dobrou noc|buenas nočes
por favor|prosím|por favor
gracias|děkuji|grasjas
perdón|promiňte|perdon
sí|ano|si
no|ne|no
yo|já|jo
tú|ty|tu
usted|vy|usted
él|on|el
ella|ona|eja
nosotros|my|nosotros
vosotros|vy|vosotros
ellos|oni|ejos
persona|osoba|persona
amigo|kamarád|amigo
amiga|kamarádka|amiga
señor|pán|seňor
señora|paní|seňora
niño|chlapec / dítě|niňo
niña|dívka|niňa
nombre|jméno|nombre
país|země|pais
ciudad|město|sjudad
idioma|jazyk|idjoma
español|španělština / španělský|espaňol`,
    phrases: `¿Cómo te llamas?|Jak se jmenuješ?|komo te jamas
Me llamo Jana.|Jmenuji se Jana.|me jamo chana
Mucho gusto.|Těší mě.|mučo gusto
Encantado.|Těší mě. / okouzlen|enkantado
¿Cómo estás?|Jak se máš?|komo estas
Estoy bien.|Mám se dobře.|estoj bjen
Más o menos.|Jakž takž.|mas o menos
Hasta luego.|Na shledanou později.|asta luego
No entiendo.|Nerozumím.|no entjendo
¿Habla inglés?|Mluvíte anglicky?|abla ingles`
  },
  {
    title: "Čísla, čas a základní slovesa",
    summary: "Získáš čísla, dny a slovesa, která se hodí v každé první konverzaci.",
    words: `cero|nula|sero
uno|jedna|uno
dos|dva|dos
tres|tři|tres
cuatro|čtyři|kuatro
cinco|pět|sinko
seis|šest|sejs
siete|sedm|sjete
ocho|osm|očo
nueve|devět|nueve
diez|deset|djes
once|jedenáct|onse
doce|dvanáct|dose
trece|třináct|trese
catorce|čtrnáct|katorse
quince|patnáct|kinse
veinte|dvacet|bejn-te
treinta|třicet|trejnta
cien|sto|sjen
hoy|dnes|oj
mañana|zítra / ráno|maňana
ayer|včera|ajer
día|den|día
semana|týden|semana
hora|hodina|ora
minuto|minuta|minuto
ser|být trvale|ser
estar|být momentálně|estar
tener|mít|tener
hacer|dělat|aser`,
    phrases: `¿Qué hora es?|Kolik je hodin?|ke ora es
Es la una.|Je jedna hodina.|es la una
Son las dos.|Jsou dvě hodiny.|son las dos
Tengo tiempo.|Mám čas.|tengo tjempo
No tengo tiempo.|Nemám čas.|no tengo tjempo
Hoy es lunes.|Dnes je pondělí.|oj es lunes
Mañana trabajo.|Zítra pracuji.|maňana trabajo
Quiero aprender.|Chci se učit.|kjero aprender
Puedo ayudar.|Mohu pomoci.|puedo ajudar
Vamos ahora.|Jdeme teď.|bamos aora`
  },
  {
    title: "Rodina, domov a každodenní věci",
    summary: "Pojmenuješ členy rodiny, místnosti a běžné věci doma.",
    words: `familia|rodina|familja
madre|matka|madre
padre|otec|padre
hermano|bratr|ermano
hermana|sestra|ermana
hijo|syn|icho
hija|dcera|icha
abuelo|dědeček|abuelo
abuela|babička|abuela
marido|manžel|marido
mujer|žena / manželka|mucher
casa|dům|kasa
apartamento|byt|apartamento
habitación|pokoj|abitasion
cocina|kuchyně|kosina
baño|koupelna|baňo
puerta|dveře|puerta
ventana|okno|bentana
mesa|stůl|mesa
silla|židle|sija
cama|postel|kama
llave|klíč|jave
teléfono|telefon|telefono
libro|kniha|libro
bolígrafo|propiska|boligrafo
papel|papír|papel
ropa|oblečení|ropa
zapato|bota|sapato
bolsa|taška|bolsa
dinero|peníze|dinero`,
    phrases: `Esta es mi familia.|Tohle je moje rodina.|esta es mi familja
Vivo en una casa.|Bydlím v domě.|bibo en una kasa
¿Dónde está el baño?|Kde je koupelna?|donde esta el baňo
La llave está aquí.|Klíč je tady.|la jave esta aki
Necesito mi teléfono.|Potřebuji svůj telefon.|nesesito mi telefono
Tengo dos hermanos.|Mám dva sourozence / bratry.|tengo dos ermanos
Mi casa es pequeña.|Můj dům je malý.|mi kasa es pekeňa
La puerta está abierta.|Dveře jsou otevřené.|la puerta esta abjerta
¿Tienes dinero?|Máš peníze?|tjenes dinero
Busco mi bolsa.|Hledám svou tašku.|busko mi bolsa`
  },
  {
    title: "Jídlo, pití a restaurace",
    summary: "Objednáš si něco jednoduchého a poznáš základní potraviny.",
    words: `comida|jídlo|komida
bebida|nápoj|bebida
agua|voda|agua
café|káva|kafe
té|čaj|te
leche|mléko|leče
pan|chléb|pan
queso|sýr|keso
carne|maso|karne
pollo|kuře|pojo
pescado|ryba|peskado
huevo|vejce|uebo
arroz|rýže|aros
patata|brambora|patata
tomate|rajče|tomate
ensalada|salát|ensalada
fruta|ovoce|fruta
manzana|jablko|mansana
plátano|banán|platano
naranja|pomeranč|narancha
azúcar|cukr|asukar
sal|sůl|sal
aceite|olej|asejte
sopa|polévka|sopa
postre|dezert|postre
restaurante|restaurace|restaurante
menú|jídelní lístek|menu
cuenta|účet|kuenta
camarero|číšník|kamarero
vaso|sklenice|baso`,
    phrases: `Quiero agua, por favor.|Chci vodu, prosím.|kjero agua por favor
La cuenta, por favor.|Účet, prosím.|la kuenta por favor
¿Tiene menú en inglés?|Máte jídelní lístek anglicky?|tjene menu en ingles
No como carne.|Nejím maso.|no komo karne
Soy vegetariano.|Jsem vegetarián.|soj bechetarjano
Está muy bueno.|Je to moc dobré.|esta muj bueno
Tengo hambre.|Mám hlad.|tengo ambre
Tengo sed.|Mám žízeň.|tengo sed
¿Qué recomienda?|Co doporučujete?|ke rekomjenda
Para llevar.|S sebou.|para jebar`
  },
  {
    title: "Cestování a orientace",
    summary: "Zeptáš se na cestu, koupíš jízdenku a popíšeš základní směr.",
    words: `viaje|cesta / výlet|bjache
hotel|hotel|otel
reserva|rezervace|reserba
pasaporte|pas|pasaporte
billete|jízdenka / letenka|bijete
tren|vlak|tren
autobús|autobus|autobus
coche|auto|koče
taxi|taxi|taksi
avión|letadlo|abjon
aeropuerto|letiště|aeropuerto
estación|nádraží|estasjon
calle|ulice|kaje
plaza|náměstí|plasa
mapa|mapa|mapa
derecha|vpravo|dereča
izquierda|vlevo|iskjerda
recto|rovně|rekto
cerca|blízko|serka
lejos|daleko|lechos
entrada|vchod|entrada
salida|východ|salida
puente|most|puente
playa|pláž|plaja
montaña|hora|montaňa
museo|muzeum|museo
tienda|obchod|tjenda
precio|cena|presjo
barato|levný|barato
caro|drahý|karo`,
    phrases: `¿Dónde está la estación?|Kde je nádraží?|donde esta la estasjon
Necesito un billete.|Potřebuji jízdenku.|nesesito un bijete
Voy al hotel.|Jedu do hotelu.|boj al otel
Gire a la derecha.|Zahněte doprava.|chire a la dereča
Siga recto.|Jděte rovně.|siga rekto
Está cerca de aquí.|Je to blízko odtud.|esta serka de aki
¿Cuánto cuesta?|Kolik to stojí?|kuanto kuesta
Es muy caro.|Je to moc drahé.|es muj karo
Tengo una reserva.|Mám rezervaci.|tengo una reserba
Quiero ir a la playa.|Chci jít na pláž.|kjero ir a la plaja`
  },
  {
    title: "Barvy, popis a přídavná jména",
    summary: "Začneš popisovat věci kolem sebe: barvu, velikost, kvalitu a náladu.",
    words: `rojo|červený|rocho
amarillo|žlutý|amarijo
azul|modrý|asul
verde|zelený|berde
blanco|bílý|blanko
negro|černý|negro
gris|šedý|gris
marrón|hnědý|maron
grande|velký|grande
pequeño|malý|pekeňo
alto|vysoký|alto
bajo|nízký|bacho
nuevo|nový|nuebo
viejo|starý|bjecho
bueno|dobrý|bueno
malo|špatný|malo
bonito|hezký|bonito
feo|ošklivý|feo
fácil|snadný|fasil
difícil|těžký|difisil
rápido|rychlý|rapido
lento|pomalý|lento
caliente|horký|kaljente
frío|studený|frio
feliz|šťastný|felis
triste|smutný|triste
cansado|unavený|kansado
limpio|čistý|limpjo
sucio|špinavý|susjo
importante|důležitý|importante`,
    phrases: `El coche es rojo.|Auto je červené.|el koče es rocho
La casa es grande.|Dům je velký.|la kasa es grande
Es fácil.|Je to snadné.|es fasil
Es difícil para mí.|Je to pro mě těžké.|es difisil para mi
Estoy cansado.|Jsem unavený.|estoj kansado
Estoy feliz.|Jsem šťastný.|estoj felis
El café está caliente.|Káva je horká.|el kafe esta kaljente
El agua está fría.|Voda je studená.|el agua esta fria
Es muy importante.|Je to velmi důležité.|es muj importante
La habitación está limpia.|Pokoj je čistý.|la abitasjon esta limpja`
  },
  {
    title: "Práce, škola a technologie",
    summary: "Zvládneš pojmenovat běžné pracovní a studijní situace.",
    words: `trabajo|práce|trabacho
oficina|kancelář|ofisina
escuela|škola|eskuela
clase|hodina / třída|klase
profesor|učitel|profesor
estudiante|student|estudjante
ordenador|počítač|ordenador
pantalla|obrazovka|pantaja
teclado|klávesnice|teklado
ratón|myš|raton
internet|internet|internet
correo|e-mail / pošta|koreo
mensaje|zpráva|mensache
reunión|schůzka|reunjon
proyecto|projekt|projekto
archivo|soubor|arčibo
carpeta|složka|karpeta
documento|dokument|dokumento
pregunta|otázka|pregunta
respuesta|odpověď|respuesta
problema|problém|problema
solución|řešení|solusjon
ayuda|pomoc|ajuda
aprender|učit se|aprender
leer|číst|leer
escribir|psát|eskribir
escuchar|poslouchat|eskučar
hablar|mluvit|ablar
abrir|otevřít|abrir
cerrar|zavřít|serar`,
    phrases: `Trabajo en una oficina.|Pracuji v kanceláři.|trabacho en una ofisina
Soy estudiante.|Jsem student.|soj estudjante
Tengo una pregunta.|Mám otázku.|tengo una pregunta
No sé la respuesta.|Neznám odpověď.|no se la respuesta
Necesito ayuda.|Potřebuji pomoc.|nesesito ajuda
Voy a leer.|Budu číst.|boj a leer
Quiero escribir.|Chci psát.|kjero eskribir
Abra el archivo.|Otevřete soubor.|abra el arčibo
Cierre la ventana.|Zavřete okno.|sjere la bentana
Hay una reunión.|Je schůzka.|aj una reunjon`
  },
  {
    title: "Zdraví, tělo a pocity",
    summary: "Popíšeš základní části těla, potíže a jednoduchou žádost o pomoc.",
    words: `cuerpo|tělo|kuerpo
cabeza|hlava|kabesa
cara|obličej|kara
ojo|oko|ocho
oreja|ucho|orecha
nariz|nos|naris
boca|ústa|boka
mano|ruka|mano
brazo|paže|braso
pierna|noha|pjerna
pie|chodidlo|pje
corazón|srdce|korason
salud|zdraví|salud
médico|lékař|mediko
farmacia|lékárna|farmasja
hospital|nemocnice|ospital
dolor|bolest|dolor
fiebre|horečka|fjebre
resfriado|nachlazení|resfrjado
medicina|lék|medisina
seguro|pojištění / bezpečný|seguro
emergencia|nouze|emerchensja
descanso|odpočinek|deskanso
sueño|spánek / sen|sueňo
miedo|strach|mjedo
alegría|radost|alegria
calma|klid|kalma
fuerte|silný|fuerte
débil|slabý|debil
enfermo|nemocný|enfermo`,
    phrases: `Me duele la cabeza.|Bolí mě hlava.|me duele la kabesa
Necesito un médico.|Potřebuji lékaře.|nesesito un mediko
¿Dónde hay una farmacia?|Kde je lékárna?|donde aj una farmasja
Estoy enfermo.|Jsem nemocný.|estoj enfermo
Tengo fiebre.|Mám horečku.|tengo fjebre
Es una emergencia.|Je to nouze.|es una emerchensja
Necesito descansar.|Potřebuji odpočívat.|nesesito deskansar
Tengo miedo.|Mám strach.|tengo mjedo
Estoy tranquilo.|Jsem klidný.|estoj trankilo
Me siento mejor.|Cítím se lépe.|me sjento mejor`
  },
  {
    title: "Nákupy, počasí a volný čas",
    summary: "Nakoupíš, zeptáš se na cenu a řekneš něco o počasí a koníčcích.",
    words: `compra|nákup|kompra
mercado|trh|merkado
supermercado|supermarket|supermerkado
panadería|pekárna|panaderia
ropa|oblečení|ropa
talla|velikost|taja
color|barva|kolor
dinero|peníze|dinero
tarjeta|karta|tarcheta
efectivo|hotovost|efektibo
recibo|účtenka|resibo
descuento|sleva|deskuento
tiempo|počasí / čas|tjempo
sol|slunce|sol
lluvia|déšť|jubja
nieve|sníh|njebe
viento|vítr|bjento
nube|mrak|nube
calor|teplo|kalor
frío|chlad|frio
deporte|sport|deporte
música|hudba|musika
película|film|pelikula
juego|hra|chuego
paseo|procházka|paseo
foto|fotka|foto
fiesta|oslava|fjesta
vacaciones|dovolená|bakasjones
libre|volný|libre
abierto|otevřený|abjerto`,
    phrases: `¿Cuánto cuesta esta camisa?|Kolik stojí tato košile?|kuanto kuesta esta kamisa
Pago con tarjeta.|Platím kartou.|pago kon tarcheta
¿Tiene otra talla?|Máte jinou velikost?|tjene otra taja
Quiero un descuento.|Chci slevu.|kjero un deskuento
Hace sol.|Je slunečno.|ase sol
Llueve mucho.|Hodně prší.|jueve mučo
Hace frío.|Je chladno.|ase frio
Me gusta la música.|Mám rád hudbu.|me gusta la musika
Voy de vacaciones.|Jedu na dovolenou.|boj de bakasjones
La tienda está abierta.|Obchod je otevřený.|la tjenda esta abjerta`
  },
  {
    title: "Upevnění: otázky, spojky a užitečná slovesa",
    summary: "Poslední základní balík propojí věty a dá ti slova pro jednoduché rozhovory.",
    words: `qué|co / jaký|ke
quién|kdo|kjen
dónde|kde|donde
cuándo|kdy|kuando
por qué|proč|por ke
porque|protože|porke
cómo|jak|komo
cuánto|kolik|kuanto
y|a|i
o|nebo|o
pero|ale|pero
también|také|tambjen
siempre|vždy|sjempre
nunca|nikdy|nunka
ahora|teď|aora
después|potom|despues
antes|předtím|antes
aquí|tady|aki
allí|tam|aji
venir|přijít|benir
ir|jít / jet|ir
ver|vidět|ber
dar|dát|dar
tomar|vzít / pít|tomar
comprar|koupit|komprar
vender|prodat|bender
buscar|hledat|buskar
encontrar|najít|enkontrar
esperar|čekat / doufat|esperar
recordar|pamatovat si|rekordar`,
    phrases: `¿Qué significa?|Co to znamená?|ke signifika
¿Dónde vives?|Kde bydlíš?|donde bibes
¿Cuándo llegas?|Kdy přijedeš?|kuando jegas
¿Por qué estudias español?|Proč studuješ španělštinu?|por ke estudjas espaňol
Porque me gusta.|Protože mě to baví.|porke me gusta
Yo también.|Já také.|jo tambjen
Ahora no puedo.|Teď nemohu.|aora no puedo
Después hablamos.|Potom si promluvíme.|despues ablamos
Voy a buscarlo.|Půjdu to hledat.|boj a buskarlo
No lo recuerdo.|Nepamatuji si to.|no lo rekordjo`
  }
];

const lessons = lessonSource.map((lesson, lessonIndex) => ({
  ...lesson,
  number: lessonIndex + 1,
  words: parseRows(lesson.words, lessonIndex, "word"),
  phrases: parseRows(lesson.phrases, lessonIndex, "phrase")
}));

const allWords = lessons.flatMap(lesson => lesson.words);
const allPhrases = lessons.flatMap(lesson => lesson.phrases);
const allItems = [...allWords, ...allPhrases];

const state = {
  lessonIndex: 0,
  game: "quiz",
  right: 0,
  wrong: 0,
  currentItem: null,
  fallTimer: null,
  fallTop: 0,
  selectedMemory: null,
  progress: JSON.parse(localStorage.getItem("spanishProgress") || "{}")
};

const $ = selector => document.querySelector(selector);

function parseRows(source, lessonIndex, type) {
  return source.trim().split("\n").map((row, index) => {
    const [es, cs, pron] = row.split("|");
    return { id: `${type}-${lessonIndex}-${index}`, es, cs, pron, lessonIndex, type };
  });
}

function saveProgress() {
  localStorage.setItem("spanishProgress", JSON.stringify(state.progress));
  renderProgress();
}

function markSeen(item) {
  const key = `lesson-${item.lessonIndex}`;
  state.progress[key] = state.progress[key] || { seen: 0, right: 0, wrong: 0 };
  state.progress[key].seen = Math.max(state.progress[key].seen, 1);
  saveProgress();
}

function markAnswer(item, correct) {
  const key = `lesson-${item.lessonIndex}`;
  state.progress[key] = state.progress[key] || { seen: 0, right: 0, wrong: 0 };
  state.progress[key][correct ? "right" : "wrong"] += 1;
  state.progress[key].seen = 1;
  saveProgress();
}

function sample(array, count) {
  return [...array].sort(() => Math.random() - 0.5).slice(0, count);
}

function lessonPool() {
  const chosen = Number($("#gameLesson").value);
  return chosen === -1 ? allWords : lessons[chosen].words;
}

function renderNavigation() {
  document.querySelectorAll(".nav-btn").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".nav-btn").forEach(item => item.classList.remove("active"));
      document.querySelectorAll(".view").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      $(`#${button.dataset.view}`).classList.add("active");
      if (button.dataset.view === "dictionary") renderDictionary();
    });
  });
}

function renderLessonList() {
  $("#lessonList").innerHTML = lessons.map((lesson, index) => `
    <button class="lesson-button ${index === state.lessonIndex ? "active" : ""}" data-lesson="${index}">
      <strong>${lesson.number}. ${lesson.title}</strong><br>
      <span>${lesson.words.length} slov, ${lesson.phrases.length} frází</span>
    </button>
  `).join("");

  document.querySelectorAll(".lesson-button").forEach(button => {
    button.addEventListener("click", () => {
      state.lessonIndex = Number(button.dataset.lesson);
      renderLesson();
    });
  });
}

function renderLesson() {
  const lesson = lessons[state.lessonIndex];
  renderLessonList();
  $("#lessonNumber").textContent = `Lekce ${lesson.number}`;
  $("#lessonTitle").textContent = lesson.title;
  $("#lessonSummary").textContent = lesson.summary;
  $("#lessonCounts").textContent = `${lesson.words.length} slovíček + ${lesson.phrases.length} frází`;
  $("#overallCount").textContent = `${allWords.length} slov / ${allPhrases.length} frází`;
  $("#wordGrid").innerHTML = lesson.words.map(word => `
    <article class="word-card">
      <span class="spanish">${word.es}</span>
      <span class="pron">výslovnost: ${word.pron}</span>
      <span class="czech">${word.cs}</span>
    </article>
  `).join("");
  $("#phraseList").innerHTML = lesson.phrases.map(phrase => `
    <div class="phrase-row">
      <div><strong>${phrase.es}</strong><br><span class="pron">${phrase.pron}</span></div>
      <div>${phrase.cs}</div>
    </div>
  `).join("");
  $("#lessonWrap").textContent = `Po této lekci bys měl zvládnout téma „${lesson.title.toLowerCase()}“. Nejdřív si přečti slovíčka nahlas, pak spusť rychlý kvíz a nakonec padající slova.`;
  lesson.words.slice(0, 5).forEach(markSeen);
}

function renderGameLessons() {
  $("#gameLesson").innerHTML = `<option value="-1">Všechny lekce</option>` + lessons.map((lesson, index) =>
    `<option value="${index}" ${index === state.lessonIndex ? "selected" : ""}>${lesson.number}. ${lesson.title}</option>`
  ).join("");
  $("#gameLesson").addEventListener("change", startGame);
}

function setScore(rightChange = 0, wrongChange = 0) {
  state.right += rightChange;
  state.wrong += wrongChange;
  $("#rightScore").textContent = state.right;
  $("#wrongScore").textContent = state.wrong;
}

function resetScore() {
  state.right = 0;
  state.wrong = 0;
  setScore();
}

function startGame() {
  clearInterval(state.fallTimer);
  state.fallTimer = null;
  const titles = {
    quiz: ["Rychlý kvíz", "Vyber správný český překlad španělského slova."],
    falling: ["Padající slova", "Slovo padá dolů. Klikni na správný překlad dřív, než dopadne."],
    pairs: ["Pexeso překladů", "Najdi dvojice: španělské slovo a jeho český překlad."],
    type: ["Doplň překlad", "Napiš český překlad. Stačí hlavní slovo bez diakritiky i s diakritikou."]
  };
  $("#gameTitle").textContent = titles[state.game][0];
  $("#gameHelp").textContent = titles[state.game][1];
  if (state.game === "quiz") renderQuiz();
  if (state.game === "falling") renderFalling();
  if (state.game === "pairs") renderPairs();
  if (state.game === "type") renderTypeGame();
}

function renderQuiz() {
  const pool = lessonPool();
  const item = sample(pool, 1)[0];
  state.currentItem = item;
  const answers = sample([item, ...sample(allWords.filter(word => word.id !== item.id), 5)], 4);
  $("#gameArea").innerHTML = `
    <div class="game-area-inner">
      <div class="prompt-card"><span>Přelož:</span><strong>${item.es}</strong><span>${item.pron}</span></div>
      <div class="answers">${answers.map(answer => `<button class="answer-btn" data-id="${answer.id}">${answer.cs}</button>`).join("")}</div>
    </div>
  `;
  document.querySelectorAll(".answer-btn").forEach(button => {
    button.addEventListener("click", () => {
      const correct = button.dataset.id === item.id;
      button.classList.add(correct ? "correct" : "wrong");
      setScore(correct ? 1 : 0, correct ? 0 : 1);
      markAnswer(item, correct);
      setTimeout(renderQuiz, 650);
    });
  });
}

function renderFalling() {
  const pool = lessonPool();
  const item = sample(pool, 1)[0];
  state.currentItem = item;
  const answers = sample([item, ...sample(allWords.filter(word => word.id !== item.id), 5)], 4);
  state.fallTop = 0;
  $("#gameArea").innerHTML = `
    <div class="game-area-inner">
      <div class="fall-zone"><div class="fall-word" id="fallWord">${item.es}</div></div>
      <div class="answers">${answers.map(answer => `<button class="answer-btn" data-id="${answer.id}">${answer.cs}</button>`).join("")}</div>
    </div>
  `;
  state.fallTimer = setInterval(() => {
    state.fallTop += 5;
    $("#fallWord").style.top = `${state.fallTop}px`;
    if (state.fallTop > 285) {
      clearInterval(state.fallTimer);
      setScore(0, 1);
      markAnswer(item, false);
      setTimeout(renderFalling, 500);
    }
  }, 130);
  document.querySelectorAll(".answer-btn").forEach(button => {
    button.addEventListener("click", () => {
      const correct = button.dataset.id === item.id;
      clearInterval(state.fallTimer);
      button.classList.add(correct ? "correct" : "wrong");
      setScore(correct ? 1 : 0, correct ? 0 : 1);
      markAnswer(item, correct);
      setTimeout(renderFalling, 650);
    });
  });
}

function renderPairs() {
  const cards = sample(lessonPool(), 6).flatMap(item => [
    { pair: item.id, text: item.es, lang: "es" },
    { pair: item.id, text: item.cs, lang: "cs" }
  ]);
  $("#gameArea").innerHTML = `<div class="pairs-grid">${sample(cards, cards.length).map((card, index) =>
    `<button class="memory-card" data-pair="${card.pair}" data-index="${index}">${card.text}</button>`
  ).join("")}</div>`;
  state.selectedMemory = null;
  document.querySelectorAll(".memory-card").forEach(card => {
    card.addEventListener("click", () => {
      if (card.classList.contains("matched") || card === state.selectedMemory) return;
      card.classList.add("selected");
      if (!state.selectedMemory) {
        state.selectedMemory = card;
        return;
      }
      const correct = card.dataset.pair === state.selectedMemory.dataset.pair;
      setScore(correct ? 1 : 0, correct ? 0 : 1);
      if (correct) {
        card.classList.add("matched");
        state.selectedMemory.classList.add("matched");
      }
      setTimeout(() => {
        card.classList.remove("selected");
        state.selectedMemory?.classList.remove("selected");
        state.selectedMemory = null;
      }, 500);
    });
  });
}

function renderTypeGame() {
  const item = sample(lessonPool(), 1)[0];
  state.currentItem = item;
  $("#gameArea").innerHTML = `
    <form class="type-form">
      <div class="prompt-card"><span>Napiš česky:</span><strong>${item.es}</strong><span>${item.pron}</span></div>
      <input id="typeAnswer" autocomplete="off" placeholder="Tvůj překlad">
      <button class="print-btn" type="submit">Zkontrolovat</button>
      <p id="typeResult"></p>
    </form>
  `;
  $(".type-form").addEventListener("submit", event => {
    event.preventDefault();
    const given = normalize($("#typeAnswer").value);
    const accepted = given.length > 0 && item.cs.split("/").some(part => normalize(part).includes(given) || given.includes(normalize(part)));
    $("#typeResult").textContent = accepted ? "Správně." : `Skoro. Správně je: ${item.cs}`;
    setScore(accepted ? 1 : 0, accepted ? 0 : 1);
    markAnswer(item, accepted);
    setTimeout(renderTypeGame, 900);
  });
  $("#typeAnswer").focus();
}

function normalize(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function renderDictionary() {
  const query = normalize($("#searchBox").value || "");
  const rows = allItems.filter(item => {
    const haystack = normalize(`${item.es} ${item.cs} ${item.pron}`);
    return haystack.includes(query);
  });
  $("#dictStats").textContent = `Celkem: ${allWords.length} slovíček a ${allPhrases.length} frází. Zobrazeno: ${rows.length}.`;
  $("#dictionaryTable").innerHTML = rows.map(item => `
    <div class="dict-row">
      <span class="tag">${item.type === "word" ? "slovo" : "fráze"} ${item.lessonIndex + 1}</span>
      <strong>${item.es}</strong>
      <span>${item.cs}</span>
      <span class="pron">${item.pron}</span>
    </div>
  `).join("");
}

function renderProgress() {
  $("#progressGrid").innerHTML = lessons.map((lesson, index) => {
    const stats = state.progress[`lesson-${index}`] || { seen: 0, right: 0, wrong: 0 };
    const total = stats.right + stats.wrong;
    const pct = total ? Math.round((stats.right / total) * 100) : 0;
    return `<div class="progress-item">
      <strong>${lesson.number}. lekce</strong>
      <p>${lesson.title}</p>
      <span>Správnost: ${pct}%</span><br>
      <span>Správně ${stats.right}, chyby ${stats.wrong}</span>
    </div>`;
  }).join("");
}

function bindEvents() {
  $("#shuffleLesson").addEventListener("click", () => {
    document.querySelector('[data-view="games"]').click();
    $("#gameLesson").value = state.lessonIndex;
    state.game = "quiz";
    document.querySelectorAll(".game-tab").forEach(tab => tab.classList.toggle("active", tab.dataset.game === "quiz"));
    resetScore();
    startGame();
  });
  document.querySelectorAll(".game-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".game-tab").forEach(item => item.classList.remove("active"));
      tab.classList.add("active");
      state.game = tab.dataset.game;
      resetScore();
      startGame();
    });
  });
  $("#resetGame").addEventListener("click", () => {
    resetScore();
    startGame();
  });
  $("#searchBox").addEventListener("input", renderDictionary);
  $("#printDict").addEventListener("click", () => {
    document.querySelector('[data-view="dictionary"]').click();
    window.print();
  });
  $("#clearProgress").addEventListener("click", () => {
    state.progress = {};
    saveProgress();
  });
}

renderNavigation();
renderGameLessons();
bindEvents();
renderLesson();
renderDictionary();
renderProgress();
startGame();
