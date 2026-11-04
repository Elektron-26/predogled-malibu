/* Spletni Atelje · izris strani za gostilne (uredniški slog, več strani). Podatki so v podatki.js */
(function(){
const C = CONFIG, $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const STRAN = document.body.dataset.stran || "domov";
const R = document.documentElement.style;
if(C.barve?.poudarek) R.setProperty('--rja', C.barve.poudarek);
if(C.barve?.temna) R.setProperty('--zelena', C.barve.temna);

const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const foto = (src, cls="", opis="Fotografija") => `<div class="foto ${src?'':'ph'} ${cls}" data-opis="${esc(opis)}" ${src?`style="background-image:url('${esc(src)}')"`:''}></div>`;
const S = C.slike || {}, G = S.galerija || [];
const telHref = "tel:" + C.kontakt.telefon.replace(/[^\d+]/g,"");
const dni = ["Ponedeljek","Torek","Sreda","Četrtek","Petek","Sobota","Nedelja"];
const now = new Date(), di = (now.getDay()+6)%7;
const imaPrazn = C.praznovanja?.prostori?.length;
const pu = '<span class="pu">→</span>';
// "Kosilo, ki se spremeni v *izlet*." → ležeče
const lez = s => esc(s).replace(/\*(.+?)\*/g,'<i>$1</i>');

const STRANI = [
  {id:"domov", ime:"Domov", url:"index.html", opis:"Začetek"},
  {id:"jedilnik", ime:"Jedilnik", url:"jedilnik.html", opis:"Jedi in cene"},
  {id:"onas", ime:"O nas", url:"o-nas.html", opis:"Zgodba, galerija"},
  ...(imaPrazn ? [{id:"praznovanja", ime:"Praznovanja", url:"praznovanja.html", opis:"Za družbe"}] : []),
  {id:"kontakt", ime:"Kontakt", url:"kontakt.html", opis:"Rezervacija"}
];
const cur = STRANI.find(s=>s.id===STRAN) || STRANI[0];
const nasl = STRANI[(STRANI.indexOf(cur)+1) % STRANI.length];
document.title = STRAN==="domov" ? `${C.ime} · ${C.kraj}` : `${cur.ime} · ${C.ime}, ${C.kraj}`;
const md = document.querySelector('meta[name=description]'); if(md && !md.content) md.content = `${C.ime}, ${C.kraj}. ${C.opis||""}`;
if(C.predogled && !document.querySelector('meta[name=robots]')){ const m=document.createElement('meta'); m.name='robots'; m.content='noindex'; document.head.appendChild(m); }

/* odprto zdaj */
const toM = t => { const [x,y]=t.split(":").map(Number); return x*60+y; };
function nextOpen(){ for(let k=1;k<=7;k++){ const j=(di+k)%7; if(C.delovniCas[j]) return (k===1?"jutri":dni[j].toLowerCase()) + " ob " + C.delovniCas[j].split("-")[0]; } return ""; }
function odprto(){
  const h = C.delovniCas[di];
  if(!h){ const nx=nextOpen(); return {on:false,t:"Danes zaprto"+(nx?`, odpremo ${nx}`:"")}; }
  const [a,b] = h.split("-"), m = now.getHours()*60+now.getMinutes();
  let bm = toM(b); if(bm<=toM(a)) bm += 1440;
  if(m>=toM(a) && m<bm) return {on:true,t:`Danes odprto do ${b==="24:00"?"polnoči":b.replace(/^0/,"")}`};
  if(m<toM(a)) return {on:false,t:`Odpremo danes ob ${a}`};
  const nx=nextOpen(); return {on:false,t:"Zaprto"+(nx?`, odpremo ${nx}`:"")};
}
const st = odprto();
const casTabela = () => `<table class="cas">${dni.map((d,i)=>`<tr class="${i===di?'danes':''}"><td>${d}</td><td>${C.delovniCas[i]?C.delovniCas[i].replace("-"," – "):"zaprto"}</td></tr>`).join("")}</table>${C.opombaCas?`<p class="siv" style="font-size:14px;margin-top:12px">${esc(C.opombaCas)}</p>`:''}`;
const jedHTML = j => `<div class="jed rev"><b>${esc(j.ime)}${j.znacka?`<em>${esc(j.znacka)}</em>`:''}</b><span class="c">${esc(j.cena||"")}</span>${j.opis?`<small>${esc(j.opis)}</small>`:''}</div>`;

/* glava strani */
let h = "";
if(C.predogled) h += `<div class="trak"><b>Predogled</b> · brezplačen osnutek nove spletne strani, pripravil Spletni Atelje</div>`;
h += `<div class="info"><div class="wrap"><span><span class="dot ${st.on?'':'off'}"></span>${esc(st.t)}</span><a href="${telHref}">${esc(C.kontakt.telefon)}</a><span>${esc(C.kontakt.naslov)}</span>${C.kontakt.facebook?`<a class="des" href="${esc(C.kontakt.facebook)}" target="_blank" rel="noopener">Facebook ↗</a>`:''}</div></div>`;
h += `<nav><div class="wrap"><a class="logo" href="index.html">${esc(C.ime)}<span>${esc(C.kraj)}</span></a>
<div class="navl">${STRANI.filter(s=>s.id!=="domov").map(s=>`<a href="${s.url}" class="${s.id===STRAN?'on':''}">${s.ime}</a>`).join("")}</div>
${C.rezervacija?`<a class="btn btn-r navcta" href="kontakt.html#rezervacija">Rezervacija</a>`:`<a class="btn btn-r navcta" href="${telHref}">Pokličite</a>`}
<button class="burger" aria-label="Meni" aria-expanded="false"><span></span></button></div></nav>
<div class="mmeni" aria-hidden="true">${STRANI.map(s=>`<a href="${s.url}" class="${s.id===STRAN?'on':''}">${s.ime}<small>${s.opis}</small></a>`).join("")}<div class="mk">${esc(C.kontakt.naslov)}<br>${esc(C.kontakt.telefon)}</div></div>`;

const glava = (naslov, opis) => `<header class="glava"><div class="wrap"><h1 class="rev">${naslov}</h1>${opis?`<p class="besedilo rev">${esc(opis)}</p>`:''}</div></header>`;
const nasl2 = (oznaka, naslov) => `<div class="nasl"><span class="mala rev">${esc(oznaka)}</span><h2 class="rev">${naslov}</h2></div>`;

let m = "";
/* ---------- DOMOV ---------- */
if(STRAN==="domov"){
  m += `<header class="hero"><div class="wrap"><div><h1 class="rev">${lez(C.naslov||C.ime)}</h1><p class="besedilo uv rev">${esc(C.opis||"")}</p>
<div class="cta rev">${C.rezervacija?`<a class="btn btn-r" href="kontakt.html#rezervacija">Rezervirajte mizo ${pu}</a>`:''}<a class="btn" href="jedilnik.html">Jedilnik</a></div></div>
<div class="slike rev">${foto(S.hero,"s1",S.heroOpis||"Gostilna")}${foto(S.hero2,"s2",S.hero2Opis||"Jed")}${S.heroNapis?`<figcaption class="ozn">${esc(S.heroNapis)}</figcaption>`:''}</div></div></header>`;
  if(C.trak?.length) m += `<div class="tekoc" aria-hidden="true"><div class="t">${[...C.trak,...C.trak].map(t=>`<span>${esc(t)}</span>`).join("")}</div></div>`;
  const O = C.onas||{};
  m += `<section><div class="wrap zgodba"><div><span class="mala siv rev">${esc(O.oznaka||"Pri nas")}</span><p class="citat rev" style="margin-top:22px">${lez(O.naslov||"")}</p>${(O.besedilo||[]).slice(0,2).map(p=>`<p class="besedilo rev">${esc(p)}</p>`).join("")}<p class="rev" style="margin-top:28px"><a class="pov" href="o-nas.html">Več o nas</a></p></div>
${foto(S.zgodba1||G[0],"z1 rev",S.zgodba1Opis||"Terasa")}${foto(S.zgodba2||G[1],"z2 rev",S.zgodba2Opis||"Notranjost")}</div></section>`;
  const izbr = C.jedilnik.flatMap(k=>k.jedi).filter(j=>j.izbor).slice(0,6);
  const izbor = izbr.length ? izbr : C.jedilnik.flatMap(k=>k.jedi).filter(j=>j.cena).slice(0,5);
  if(izbor.length) m += `<section class="bel"><div class="wrap"><div class="izbor"><div><span class="mala siv rev">Z jedilnika</span><h2 class="rev" style="font-size:clamp(42px,5vw,72px);margin-top:16px">${lez(C.izborNaslov||"Kaj *radi* naročajo")}</h2><p class="rev" style="margin-top:26px"><a class="pov" href="jedilnik.html">Celoten jedilnik</a></p></div>
<div class="seznam">${izbor.map(jedHTML).join("")}</div></div></div></section>`;
  if(C.ocene?.length){ const o = C.ocene[0];
    m += `<section><div class="wrap"><div class="mnenje"><div class="rev"><span class="mala siv">Gostje o nas</span>${C.ocenaSkupaj?`<p class="ocena-st"><b>${esc(C.ocenaSkupaj.zvezdice)}</b><span>★★★★★</span><br>${esc(C.ocenaSkupaj.stevilo)} mnenj na ${esc(C.ocenaSkupaj.vir==="Google"?"Googlu":C.ocenaSkupaj.vir)}</p>`:''}</div>
<blockquote class="rev"><p>»${esc(o.besedilo)}«</p><cite>${esc(o.avtor)}, ${esc(o.vir||"Google")}</cite></blockquote></div></div></section>`; }
  if(C.pas) m +=`<section class="pas" style="padding:0">${foto(C.pas.slika,"",C.pas.opis||"Fotografija")}<div class="wrap"><h2 class="rev">${lez(C.pas.naslov)}</h2><p class="rev">${esc(C.pas.besedilo)}</p>${C.pas.povezava?`<p class="rev" style="margin-top:26px"><a class="btn" style="border-color:#fff;color:#fff" href="${esc(C.pas.povezava.url)}">${esc(C.pas.povezava.ime)} ${pu}</a></p>`:''}</div></section>`;
  m += `<section><div class="wrap">${nasl2("Obisk", "Pridite <i>k nam</i>")}<div class="kolofon">
<div class="rev"><span class="mala siv">Naslov</span><h3>${esc(C.kontakt.naslov)}</h3><a class="pov" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(C.zemljevid)}" target="_blank" rel="noopener">Navodila za pot</a></div>
<div class="rev"><span class="mala siv">Delovni čas</span><div style="margin-top:12px">${casTabela()}</div></div>
<div class="rev"><span class="mala siv">Telefon</span><h3><a href="${telHref}" style="text-decoration:none">${esc(C.kontakt.telefon)}</a></h3>${C.rezervacija?`<a class="btn btn-r" href="kontakt.html#rezervacija">Rezervirajte ${pu}</a>`:''}</div></div></div></section>`;
}

/* ---------- JEDILNIK ---------- */
if(STRAN==="jedilnik"){
  m += glava("Jedi<i>lnik</i>", C.jedilnikUvod||"Za večjo družbo pokličite in pripravimo meni po dogovoru.");
  m += `<div class="kat-mob">${C.jedilnik.map((k,i)=>`<a href="#k${i}">${esc(k.kategorija)}</a>`).join("")}</div>`;
  m += `<section style="padding-top:clamp(50px,6vw,90px)"><div class="wrap jedilnik"><aside class="kazalo">${C.jedilnik.map((k,i)=>`<a href="#k${i}">${esc(k.kategorija)}</a>`).join("")}${C.jeziki?`<div class="jezik">${C.jeziki.map(j=>`<span>${esc(j)}</span>`).join("")}</div>`:''}</aside><div>`;
  m += C.jedilnik.map((k,i)=>`<div class="kat" id="k${i}"><h2 class="rev">${esc(k.kategorija)}<small>${k.jedi.length}</small></h2><div style="border-top:1px solid var(--rob)">${k.jedi.map(jedHTML).join("")}</div></div>`).join("");
  m += `<p class="op">${esc(C.jedilnikOpomba||"")}</p>`;
  if(C.sSeboj) m += `<div class="sseboj rev"><div><b>Za s seboj?</b><span style="opacity:.75">Pokličite in jed vas čaka pripravljena.</span></div><a class="btn" href="${telHref}">${esc(C.kontakt.telefon)}</a></div>`;
  m += `</div></div></section>`;
}

/* ---------- O NAS ---------- */
if(STRAN==="onas"){
  const O = C.onas||{};
  m += glava("O <i>nas</i>", O.podnaslov || "");
  m += `<div class="wrap">${foto(S.onas||G[0],"glava-foto rev",S.onasOpis||"Gostilna od zunaj")}</div>`;
  m += `<section><div class="wrap">${nasl2(O.oznaka||"Zgodba", lez(O.naslov||""))}<div style="display:grid;grid-template-columns:3fr 9fr;gap:30px"><div></div><div class="uvodni rev">${(O.besedilo||[]).map(p=>`<p>${esc(p)}</p>`).join("")}</div></div></div></section>`;
  if(O.dozivetja?.length) m += `<section class="temno"><div class="wrap">${nasl2("Ob gostilni", lez(O.dozivetjaNaslov||"Več kot *kosilo*"))}<div class="doz">${O.dozivetja.map((d,i)=>`<div class="rev"><span class="n">${String(i+1).padStart(2,"0")}</span><div><b>${esc(d.naslov)}</b><span>${esc(d.opis)}</span></div></div>`).join("")}</div></div></section>`;
  if(G.length) m += `<section><div class="wrap">${nasl2("Galerija", "Pogled <i>k nam</i>")}<div class="gal">${G.map((s,i)=>s?`<button class="rev" data-src="${esc(s)}" aria-label="Povečaj fotografijo ${i+1}" style="background-image:url('${esc(s)}')"></button>`:`<button class="rev foto ph" disabled data-opis="${esc((S.galerijaOpisi||[])[i]||'Fotografija')}" aria-label="Prostor za fotografijo"></button>`).join("")}</div></div></section>
<div class="lb" role="dialog" aria-label="Povečana fotografija"><img alt=""><button aria-label="Zapri">×</button></div>`;
}

/* ---------- PRAZNOVANJA ---------- */
if(STRAN==="praznovanja" && imaPrazn){
  const P = C.praznovanja;
  m += glava(lez(P.naslov), P.uvod);
  if(S.praznovanja) m += `<div class="wrap">${foto(S.praznovanja,"glava-foto rev","Prostor")}</div>`;
  m += `<section><div class="wrap">${nasl2("Prostori", "Kje bomo <i>praznovali</i>")}<div class="vrste">${P.prostori.map(p=>`<div class="vrsta rev"><b>${esc(p.ime)}</b><span class="k">${esc(p.kapaciteta)}</span><span>${esc(p.opis)}</span></div>`).join("")}</div></div></section>`;
  if(P.meniji?.length) m += `<section class="bel"><div class="wrap">${nasl2("Meniji", "Za vsako <i>priložnost</i>")}<div class="meniji">${P.meniji.map(x=>`<div class="meni rev"><b>${esc(x.ime)}</b><span class="c">${esc(x.cena)}</span><span>${esc(x.opis)}</span></div>`).join("")}</div></div></section>`;
  m += `<section id="povprasevanje" class="bel"><div class="wrap obr"><div><span class="mala siv rev">Povpraševanje</span><h2 class="rev" style="font-size:clamp(42px,5vw,72px);margin-top:16px">Povejte nam, <i>kaj praznujete</i></h2><p class="besedilo rev" style="margin-top:20px">Odgovorimo v enem delovnem dnevu s predlogom menija in ceno.</p></div>
<form id="pf" class="rev">
<label>Ime in priimek<input name="ime" required autocomplete="name"></label>
<label>Telefon<input name="tel" type="tel" required autocomplete="tel"></label>
<label>Priložnost<select name="prilo">${(P.priloznosti||["Praznovanje"]).map(x=>`<option>${esc(x)}</option>`).join("")}</select></label>
<label>Datum<input name="datum" type="date" required></label>
<label>Število oseb<input name="osebe" type="number" min="5" value="20" required></label>
<label>Prostor<select name="prostor"><option>Vseeno</option>${P.prostori.map(p=>`<option>${esc(p.ime)}</option>`).join("")}</select></label>
<label class="f">Želje (meni, torta, okrasitev)<textarea name="msg" rows="4"></textarea></label>
<button class="btn btn-r f" type="submit">Pošlji povpraševanje ${pu}</button></form></div></section>`;
}

/* ---------- KONTAKT ---------- */
if(STRAN==="kontakt"){
  m += glava("Kon<i>takt</i>", "Pokličite, pišite ali se kar oglasite.");
  m += `<section style="padding-top:clamp(50px,6vw,90px)"><div class="wrap kontakt"><div class="rev"><span class="mala siv">Delovni čas</span><div style="margin-top:14px">${casTabela()}</div>
<div class="kl"><a href="${telHref}">${esc(C.kontakt.telefon)}<small>Telefon</small></a>
${C.kontakt.email?`<a href="mailto:${esc(C.kontakt.email)}">${esc(C.kontakt.email)}<small>E-pošta</small></a>`:''}
<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(C.zemljevid)}" target="_blank" rel="noopener">${esc(C.kontakt.naslov)}<small>Navodila ↗</small></a>
${C.kontakt.facebook?`<a href="${esc(C.kontakt.facebook)}" target="_blank" rel="noopener">Facebook<small>↗</small></a>`:''}
${C.kontakt.instagram?`<a href="${esc(C.kontakt.instagram)}" target="_blank" rel="noopener">Instagram<small>↗</small></a>`:''}</div></div>
<div class="map rev"><iframe loading="lazy" title="Zemljevid" src="https://maps.google.com/maps?q=${encodeURIComponent(C.zemljevid)}&z=15&output=embed"></iframe></div></div></section>`;
  if(C.rezervacija) m += `<section id="rezervacija" class="bel"><div class="wrap obr"><div><span class="mala siv rev">Rezervacija</span><h2 class="rev" style="font-size:clamp(42px,5vw,72px);margin-top:16px">Rezervirajte <i>mizo</i></h2><p class="besedilo rev" style="margin-top:20px">Potrdimo vam v najkrajšem času. Za isti dan nas raje pokličite.</p></div>
<form id="rf" class="rev">
<label>Ime in priimek<input name="ime" required autocomplete="name"></label>
<label>Telefon<input name="tel" type="tel" required autocomplete="tel"></label>
<label>Datum<input name="datum" type="date" required></label>
<label>Ura<input name="ura" type="time" required value="12:00"></label>
<label>Število oseb<select name="osebe">${Array.from({length:20},(_,i)=>`<option>${i+1}</option>`).join("")}<option>Več kot 20</option></select></label>
<label>Priložnost<select name="prilo"><option>Kosilo ali večerja</option><option>Rojstni dan</option><option>Obletnica</option><option>Poslovno srečanje</option><option>Drugo</option></select></label>
<label class="f">Sporočilo<textarea name="msg" rows="3"></textarea></label>
<button class="btn btn-r f" type="submit">Pošlji rezervacijo ${pu}</button></form></div></section>`;
}

m += `<div class="wrap"><a class="naprej" href="${nasl.url}"><span><span class="mala siv">Naprej</span><br><b>${esc(nasl.ime)}</b></span><span class="pu">→</span></a></div>`;

const foot = `<footer><div class="wrap"><div class="zg"><div><a class="logo" href="index.html">${esc(C.ime)}</a><p style="margin-top:18px;max-width:40ch">${esc(C.opis||"")}</p></div>
<div><h4>Strani</h4>${STRANI.map(s=>`<a href="${s.url}">${s.ime}</a>`).join("")}</div>
<div><h4>Kontakt</h4><a href="${telHref}">${esc(C.kontakt.telefon)}</a>${C.kontakt.email?`<a href="mailto:${esc(C.kontakt.email)}">${esc(C.kontakt.email)}</a>`:''}<span style="display:block;margin-top:8px">${esc(C.kontakt.naslov)}</span></div></div>
<div class="sp"><span>© ${now.getFullYear()} ${esc(C.ime)}</span><span>Izdelava: Spletni Atelje</span></div></div></footer>`;
const mob = `<div class="mob"><a class="btn" href="${telHref}">Pokliči</a>${C.rezervacija?`<a class="btn btn-r" href="kontakt.html#rezervacija">Rezerviraj</a>`:`<a class="btn btn-r" href="jedilnik.html">Jedilnik</a>`}</div>`;

$("#app").innerHTML = h + `<main>${m}</main>` + foot + mob;

/* meni */
const bu = $(".burger"), mm = $(".mmeni");
bu.onclick = () => { const o = document.body.classList.toggle("meni-odprt"); bu.setAttribute("aria-expanded", o); mm.setAttribute("aria-hidden", !o); document.body.style.overflow = o ? "hidden" : ""; };
/* jedilnik: aktivna kategorija */
const kn = [...$$(".kazalo a"), ...$$(".kat-mob a")];
if(kn.length){ const io2 = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ kn.forEach(a=>a.classList.toggle("on", a.getAttribute("href")==="#"+e.target.id)); const a=$$(".kat-mob a").find(a=>a.classList.contains("on")); if(a&&getComputedStyle(a.parentNode).display!=="none") a.parentNode.scrollTo({left:a.offsetLeft-20,behavior:"smooth"}); } }),{rootMargin:"-35% 0px -60% 0px"}); $$(".kat").forEach(k=>io2.observe(k)); }
/* galerija */
const lb = $(".lb");
if(lb){ $$(".gal button[data-src]").forEach(b=>b.onclick=()=>{ lb.querySelector("img").src=b.dataset.src; lb.classList.add("on"); });
  lb.onclick = e => { if(e.target!==lb.querySelector("img")) lb.classList.remove("on"); };
  document.addEventListener("keydown", e=>{ if(e.key==="Escape") lb.classList.remove("on"); }); }
/* obrazci → e-pošta */
const posl = (subject, body) => { location.href = `mailto:${C.kontakt.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; };
const rf = $("#rf");
if(rf){ rf.datum.min = new Date().toISOString().slice(0,10);
  rf.onsubmit = e => { e.preventDefault(); const f = Object.fromEntries(new FormData(rf));
    posl(`Rezervacija: ${f.datum} ob ${f.ura}, ${f.osebe} os.`, `Rezervacija mize\n\nIme: ${f.ime}\nTelefon: ${f.tel}\nDatum: ${f.datum}\nUra: ${f.ura}\nŠtevilo oseb: ${f.osebe}\nPriložnost: ${f.prilo}\nSporočilo: ${f.msg||"-"}`); }; }
const pf = $("#pf");
if(pf){ pf.datum.min = new Date().toISOString().slice(0,10);
  pf.onsubmit = e => { e.preventDefault(); const f = Object.fromEntries(new FormData(pf));
    posl(`Povpraševanje: ${f.prilo}, ${f.datum}, ${f.osebe} os.`, `Povpraševanje za praznovanje\n\nIme: ${f.ime}\nTelefon: ${f.tel}\nPriložnost: ${f.prilo}\nDatum: ${f.datum}\nŠtevilo oseb: ${f.osebe}\nProstor: ${f.prostor}\nŽelje: ${f.msg||"-"}`); }; }
/* razkrivanje */
const io = new IntersectionObserver(es=>es.forEach(x=>{ if(x.isIntersecting){ x.target.classList.add("in"); io.unobserve(x.target);} }),{threshold:.08,rootMargin:"0px 0px -5% 0px"});
$$(".rev").forEach(el=>io.observe(el));
})();
