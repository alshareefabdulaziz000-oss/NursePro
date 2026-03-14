const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
const j = JSON.stringify(data);
const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NursePro</title>
<style>
:root{--navy:#0b2444;--navy2:#163560;--teal:#0e7c6e;--teal2:#14a897;--w:#fff;--off:#f7f9fb;--g1:#eef1f6;--g2:#dce2ec;--g4:#94a3b8;--g6:#4b5f7a;--g8:#1e2d42}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,system-ui,sans-serif;background:var(--off);color:var(--g8)}
header{background:linear-gradient(135deg,var(--navy),var(--navy2) 60%,#1a4a7a);position:sticky;top:0;z-index:200;box-shadow:0 2px 20px rgba(11,36,68,.5)}
.hi{max-width:1400px;margin:auto;padding:13px 18px;display:flex;align-items:center;gap:13px;flex-wrap:wrap}
.logo{width:44px;height:44px;background:linear-gradient(135deg,var(--teal),var(--teal2));border-radius:11px;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:900;color:#fff;flex-shrink:0}
.bn{font-size:1.25rem;font-weight:800;color:#fff;line-height:1}
.bs{font-size:.63rem;color:rgba(255,255,255,.5);letter-spacing:.6px;margin-top:2px}
.sb{flex:1;max-width:460px;position:relative}
.sb input{width:100%;padding:9px 13px 9px 38px;border-radius:10px;border:1.5px solid rgba(255,255,255,.18);background:rgba(255,255,255,.12);color:#fff;font-size:.86rem;outline:none;font-family:inherit}
.sb input::placeholder{color:rgba(255,255,255,.45)}
.sb input:focus{border-color:var(--teal2);background:rgba(255,255,255,.18)}
.si{position:absolute;left:11px;top:50%;transform:translateY(-50%);color:rgba(255,255,255,.5);pointer-events:none}
.hm{display:flex;gap:9px;margin-right:auto}
.chip{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);border-radius:8px;padding:4px 11px;text-align:center}
.chip b{display:block;font-size:.92rem;color:var(--teal2)}
.chip small{font-size:.57rem;color:rgba(255,255,255,.5);letter-spacing:.4px}
.cs{background:var(--w);border-bottom:2px solid var(--g1);overflow-x:auto;scrollbar-width:none}
.cs::-webkit-scrollbar{display:none}
.ci{max-width:1400px;margin:auto;padding:7px 18px;display:flex;gap:5px;white-space:nowrap}
.cb{padding:5px 11px;border-radius:30px;border:1.5px solid var(--g2);background:transparent;color:var(--g6);font-size:.74rem;font-weight:600;cursor:pointer;white-space:nowrap;font-family:inherit}
.cb.active{background:var(--navy);border-color:var(--navy);color:#fff}
main{max-width:1400px;margin:auto;padding:20px 18px}
.ph{display:flex;align-items:baseline;justify-content:space-between;flex-wrap:wrap;gap:6px;margin-bottom:14px}
.pt{font-size:1.15rem;font-weight:800;color:var(--navy)}
.pc{font-size:.76rem;color:var(--g4)}
.pc b{color:var(--teal)}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:13px}
.card{background:var(--w);border-radius:13px;border:1.5px solid var(--g1);overflow:hidden;cursor:pointer;transition:transform .18s,box-shadow .18s}
.card:hover{transform:translateY(-2px);box-shadow:0 6px 24px rgba(11,36,68,.1)}
.ct{height:4px}.cb2{padding:14px 16px}
.ch{display:flex;align-items:flex-start;gap:10px;margin-bottom:10px}
.ci2{width:38px;height:38px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:1.15rem;flex-shrink:0}
.ctt{font-size:.9rem;font-weight:700;color:var(--navy);line-height:1.3}
.ctag{display:inline-block;margin-top:3px;font-size:.6rem;font-weight:700;letter-spacing:.3px;text-transform:uppercase;padding:2px 6px;border-radius:20px}
.csteps{list-style:none;display:flex;flex-direction:column;gap:4px}
.csteps li{display:flex;align-items:flex-start;gap:7px;font-size:.77rem;color:var(--g6);line-height:1.5}
.sn{width:17px;height:17px;border-radius:50%;flex-shrink:0;margin-top:2px;display:flex;align-items:center;justify-content:center;font-size:.55rem;font-weight:800;color:#fff}
.more{font-size:.68rem;font-weight:700;padding-left:24px}
.cf{display:flex;align-items:center;gap:4px;flex-wrap:wrap;margin-top:10px;padding-top:9px;border-top:1px solid var(--g1)}
.tag{font-size:.6rem;font-weight:700;padding:2px 6px;border-radius:20px}
.tb{background:#dbeafe;color:#1e40af}.tr{background:#fee2e2;color:#991b1b}.tg{background:var(--g1);color:var(--g6)}
.ov{position:fixed;inset:0;background:rgba(11,36,68,.72);z-index:500;display:none;align-items:center;justify-content:center;padding:14px}
.ov.open{display:flex}
.mo{background:var(--w);border-radius:16px;width:100%;max-width:660px;max-height:92vh;overflow-y:auto}
.mh{padding:16px 20px 13px;border-bottom:2px solid var(--g1);position:sticky;top:0;background:var(--w);border-radius:16px 16px 0 0;display:flex;align-items:center;gap:11px}
.mic{width:44px;height:44px;border-radius:11px;display:flex;align-items:center;justify-content:center;font-size:1.35rem;flex-shrink:0}
.mt{font-size:1.05rem;font-weight:800;color:var(--navy)}
.mcat{font-size:.65rem;font-weight:700;margin-top:2px}
.mcl{margin-right:auto;width:28px;height:28px;border-radius:7px;border:1.5px solid var(--g2);background:transparent;cursor:pointer;font-size:.85rem;color:var(--g4);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-family:inherit}
.mb{padding:16px 20px}.ms{margin-bottom:16px}
.mst{font-size:.61rem;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:var(--g4);margin-bottom:8px;display:flex;align-items:center;gap:6px}
.mst::after{content:"";flex:1;height:1px;background:var(--g1)}
.ib{border-radius:8px;padding:9px 11px;font-size:.81rem;line-height:1.6;display:flex;align-items:flex-start;gap:7px;margin-bottom:6px}
.ibi{background:#eff6ff;border:1.5px solid #bfdbfe;color:#1e40af}
.ibw{background:#fffbeb;border:1.5px solid #fde68a;color:#78350f}
.ibs{background:#f0fdf4;border:1.5px solid #bbf7d0;color:#14532d}
.eg{display:flex;flex-wrap:wrap;gap:5px}
.ec{background:var(--g1);border-radius:6px;padding:3px 8px;font-size:.73rem;color:var(--g6)}
.sol{list-style:none;display:flex;flex-direction:column;gap:7px}
.sol li{display:flex;align-items:flex-start;gap:9px;font-size:.82rem;color:var(--g6);line-height:1.6}
.sc{width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.6rem;font-weight:800;color:#fff;flex-shrink:0;margin-top:2px}
.rb{background:var(--off);border-radius:8px;padding:11px 13px}
.ri{font-size:.72rem;color:var(--g6);line-height:1.65;padding-left:13px;position:relative;margin-bottom:3px}
.ri::before{content:"\\u2022";position:absolute;left:2px;color:var(--teal)}
.nr{grid-column:1/-1;text-align:center;padding:50px 20px;color:var(--g4)}
@media(max-width:600px){.hi{padding:10px 13px;gap:9px}.bn{font-size:1.05rem}.hm{display:none}main{padding:11px 13px}.grid{grid-template-columns:1fr}.mh,.mb{padding:13px}}
</style>
</head>
<body>
<header>
  <div class="hi">
    <div class="logo">N&#961;</div>
    <div><div class="bn">NursePro</div><div class="bs">Evidence-Based Nursing Procedures</div></div>
    <div class="sb"><span class="si">&#128269;</span><input type="text" id="S" placeholder="Search..." autocomplete="off"/></div>
    <div class="hm"><div class="chip"><b id="tP">0</b><small>PROCEDURES</small></div><div class="chip"><b id="tC">0</b><small>CATEGORIES</small></div></div>
  </div>
</header>
<div class="cs"><div class="ci" id="CB"></div></div>
<main>
  <div class="ph"><div class="pt" id="PT">All Procedures</div><div class="pc" id="PC"></div></div>
  <div class="grid" id="G"></div>
</main>
<div class="ov" id="OV">
  <div class="mo">
    <div class="mh"><div class="mic" id="MI"></div><div><div class="mt" id="MT"></div><div class="mcat" id="MC"></div></div><button class="mcl" id="CL">&#10005;</button></div>
    <div class="mb" id="MB"></div>
  </div>
</div>
<script>
var D=${j};
var CATS=D.CATS,PROCS=D.PROCS,cur="all",q="";
function gc(id){for(var i=0;i<CATS.length;i++)if(CATS[i].id===id)return CATS[i];return{icon:"",label:"",color:"#374151",bg:"#f9fafb"};}
function x(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
function init(){
  var h='<button class="cb active" data-c="all">All</button>';
  for(var i=0;i<CATS.length;i++)h+='<button class="cb" data-c="'+CATS[i].id+'">'+CATS[i].icon+' '+x(CATS[i].label)+'</button>';
  document.getElementById("CB").innerHTML=h;
  document.getElementById("tP").textContent=PROCS.length;
  document.getElementById("tC").textContent=CATS.length;
  render();
}
function render(){
  var list=[],s=q.toLowerCase();
  for(var i=0;i<PROCS.length;i++){
    var p=PROCS[i];
    if(cur!=="all"&&p.cat!==cur)continue;
    if(s){var ok=p.title.toLowerCase().indexOf(s)>=0||(p.summary||"").toLowerCase().indexOf(s)>=0;if(!ok)continue;}
    list.push(p);
  }
  var ct=gc(cur);
  document.getElementById("PT").textContent=cur==="all"?"All Procedures":ct.label;
  document.getElementById("PC").innerHTML="Showing <b>"+list.length+"</b> procedure"+(list.length!==1?"s":"");
  if(!list.length){document.getElementById("G").innerHTML='<div class="nr">No results.</div>';return;}
  var h="";
  for(var i=0;i<list.length;i++){
    var p=list[i],c=gc(p.cat),sh="";
    for(var j=0;j<Math.min(3,p.steps.length);j++)sh+='<li><span class="sn" style="background:'+c.color+'">'+(j+1)+'</span><span>'+x(p.steps[j])+'</span></li>';
    if(p.steps.length>3)sh+='<li><span class="more" style="color:'+c.color+'">+'+(p.steps.length-3)+' more</span></li>';
    h+='<div class="card" data-id="'+p.id+'"><div class="ct" style="background:'+c.color+'"></div><div class="cb2"><div class="ch"><div class="ci2" style="background:'+c.bg+';color:'+c.color+'">'+p.icon+'</div><div><div class="ctt">'+x(p.title)+'</div><span class="ctag" style="background:'+c.bg+';color:'+c.color+'">'+c.icon+' '+x(c.label)+'</span></div></div><ul class="csteps">'+sh+'</ul><div class="cf"><span class="tag tg">Evidence-Based</span>'+(p.warnings&&p.warnings.length?'<span class="tag tr">Alerts</span>':'')+'<span class="tag tb">'+p.steps.length+' steps</span></div></div></div>';
  }
  document.getElementById("G").innerHTML=h;
}
document.addEventListener("click",function(e){
  var b=e.target.closest(".cb");
  if(b){var all=document.querySelectorAll(".cb");for(var i=0;i<all.length;i++)all[i].classList.remove("active");b.classList.add("active");cur=b.getAttribute("data-c");render();return;}
  var c=e.target.closest(".card");if(c){openM(+c.getAttribute("data-id"));return;}
  if(e.target.id==="OV"||e.target.id==="CL")closeM();
});
function openM(id){
  var p=null;for(var i=0;i<PROCS.length;i++)if(PROCS[i].id===id){p=PROCS[i];break;}if(!p)return;
  var c=gc(p.cat);
  document.getElementById("MI").textContent=p.icon;
  document.getElementById("MI").style.cssText="background:"+c.bg+";color:"+c.color;
  document.getElementById("MT").textContent=p.title;
  document.getElementById("MC").innerHTML='<span style="color:'+c.color+'">'+c.icon+' '+x(c.label)+'</span>';
  var h='<div class="ms"><div class="ib ibi">'+x(p.summary)+'</div></div>';
  if(p.equipment&&p.equipment.length){h+='<div class="ms"><div class="mst">Equipment</div><div class="eg">';for(var i=0;i<p.equipment.length;i++)h+='<span class="ec">'+x(p.equipment[i])+'</span>';h+='</div></div>';}
  h+='<div class="ms"><div class="mst">Steps</div><ol class="sol">';
  for(var i=0;i<p.steps.length;i++)h+='<li><span class="sc" style="background:'+c.color+'">'+(i+1)+'</span><span>'+x(p.steps[i])+'</span></li>';
  h+='</ol></div>';
  if(p.warnings&&p.warnings.length){h+='<div class="ms"><div class="mst">Warnings</div>';for(var i=0;i<p.warnings.length;i++)h+='<div class="ib ibw">'+x(p.warnings[i])+'</div>';h+='</div>';}
  if(p.notes&&p.notes.length){h+='<div class="ms"><div class="mst">Notes</div>';for(var i=0;i<p.notes.length;i++)h+='<div class="ib ibs">'+x(p.notes[i])+'</div>';h+='</div>';}
  if(p.refs&&p.refs.length){h+='<div class="ms"><div class="mst">References</div><div class="rb">';for(var i=0;i<p.refs.length;i++)h+='<div class="ri">'+x(p.refs[i])+'</div>';h+='</div></div>';}
  document.getElementById("MB").innerHTML=h;
  document.getElementById("OV").className="ov open";
  document.body.style.overflow="hidden";
  document.getElementById("OV").querySelector(".mo").scrollTop=0;
}
function closeM(){document.getElementById("OV").className="ov";document.body.style.overflow="";}
document.addEventListener("keydown",function(e){if(e.key==="Escape")closeM();});
document.getElementById("S").addEventListener("input",function(){q=this.value.trim();render();});
init();
</script>
</body>
</html>`;
fs.writeFileSync('index.html', html, 'utf8');
console.log('Done:', html.length, 'bytes');
