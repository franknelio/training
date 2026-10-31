/* ---------- PLANO ---------- */
const UP_CARDIO = {tipo:"Esteira inclinada", det:"Caminhada moderada com inclinação de 6–10%, 5–6 km/h, sem segurar no corrimão. Ritmo em que dá para falar frases curtas."};
const LO_CARDIO = {tipo:"Bicicleta ergométrica", det:"Ritmo moderado e constante (zona 2). Pernas já cansadas, então nada de tiros hoje."};
const E = (id,nome,series,reps,desc,musc,dicas,q,lado,ombro,un) => ({id,nome,series,reps,desc,musc,dicas,q,lado,ombro,un});
const PLAN = {
 1:{nome:"Costas, bíceps e abdômen",tipo:"Superiores A",cardio:UP_CARDIO,ex:[
  E("puxada","Puxada alta na polia",4,[8,12],90,["back","biceps"],["Pegada na largura dos ombros, sem abrir demais.","Peito alto, puxe a barra até a altura do queixo ou parte de cima do peito.","Leve os cotovelos para baixo, sem balançar o tronco.","Suba em 2 a 3 segundos, controlando."],"puxada alta polia execução correta",false,"Nunca puxe atrás da nuca. Se doer em cima, use a barra de pegada neutra e não deixe o braço estender por completo."),
  E("remada-sentada","Remada sentada na polia",4,[8,12],90,["back","biceps"],["Tronco ereto, joelhos levemente dobrados.","Puxe o triângulo até a barriga.","Aperte as escápulas 1 segundo no final.","Volte controlando, sem jogar o corpo."],"remada sentada polia triângulo"),
  E("remada-uni","Remada unilateral com halter",3,[10,12],75,["back","biceps"],["Mão e joelho apoiados no banco.","Puxe o halter em direção ao quadril.","Desça até alongar as costas sem girar o tronco."],"remada unilateral halter serrote",true),
  E("crucifixo-inv","Crucifixo inverso com halteres",3,[12,15],60,["rear","back"],["Tronco inclinado à frente, coluna reta.","Abra os braços para os lados com cotovelos levemente dobrados.","Carga leve, foco em sentir o fundo do ombro."],"crucifixo inverso halteres",false,"Pare na linha do corpo, sem subir os braços acima dos ombros. Se incomodar, troque pela máquina de crucifixo inverso."),
  E("rosca-halter","Rosca direta com halteres",4,[10,12],60,["biceps","forearm"],["Cotovelos colados ao corpo.","Gire a palma para cima enquanto sobe.","Desça em 3 segundos, sem balanço."],"rosca direta halteres"),
  E("rosca-martelo","Rosca martelo com halteres",3,[10,12],60,["biceps","forearm"],["Palmas viradas uma para a outra.","Punho firme, cotovelo parado.","Pode alternar os braços."],"rosca martelo halteres"),
  E("prancha","Prancha abdominal",3,[30,60],45,["abs"],["Cotovelos embaixo dos ombros.","Quadril alinhado, glúteo e abdômen contraídos.","Quando fizer 60 segundos em todas, use uma anilha leve nas costas."],"prancha abdominal correta",false,"Se o ombro direito incomodar, faça a prancha com os joelhos no chão ou apoiando os antebraços num banco.","seg")
 ]},
 2:{nome:"Quadríceps e glúteos",tipo:"Inferiores A",cardio:LO_CARDIO,ex:[
  E("leg-press","Leg press 45°",4,[8,12],90,["quad","glute"],["Pés no meio da plataforma, na largura do quadril.","Desça até 90° ou um pouco mais, sem tirar o quadril do banco.","Não trave os joelhos no topo.","Sem leg press, faça agachamento com halter."],"leg press 45 execução correta"),
  E("smith","Agachamento no Smith",4,[8,12],90,["quad","glute"],["Pés um pouco à frente da barra.","Desça controlando até a coxa ficar paralela ao chão.","Suba empurrando o chão com o pé inteiro."],"agachamento smith execução",false,"Segurar a barra nas costas pode forçar o ombro. Abra mais a pegada; se doer, troque por agachamento goblet com halter ou hack."),
  E("bulgaro","Agachamento búlgaro com halteres",3,[10,12],90,["quad","glute"],["Pé de trás apoiado no banco.","Tronco levemente inclinado à frente para pegar mais glúteo.","Desça reto, joelho de trás quase no chão."],"agachamento búlgaro halteres",true),
  E("extensora","Cadeira extensora",3,[12,15],60,["quad"],["Ajuste o encosto para o joelho alinhar com o eixo.","Estenda e segure 1 segundo em cima.","Desça em 3 segundos."],"cadeira extensora execução"),
  E("elev-pelvica","Elevação pélvica",4,[8,12],90,["glute","ham"],["Costas apoiadas no banco, barra ou halter no quadril.","Suba até o tronco ficar reto, queixo para baixo.","Aperte o glúteo 2 segundos em cima."],"elevação pélvica hip thrust execução"),
  E("abdutora","Cadeira abdutora",3,[15,20],45,["glute"],["Incline o tronco à frente para pegar mais glúteo médio.","Abra forte, volte em 2 segundos.","Nas últimas reps, pode fazer meia amplitude."],"cadeira abdutora tronco inclinado")
 ]},
 3:{nome:"Peito, ombros e tríceps",tipo:"Superiores B",cardio:UP_CARDIO,aviso:"Dia que mais exige do ombro. Sem exercícios acima da cabeça por causa da bursite. Pare a série se surgir dor (cansaço muscular pode, dor na articulação não).",ex:[
  E("supino","Supino com halteres",4,[8,12],90,["chest","triceps","delt"],["Pés firmes no chão, escápulas encaixadas para trás.","Desça controlando até a linha do peito.","Empurre juntando levemente os halteres no topo."],"supino reto halteres execução",false,"Use pegada neutra (palmas uma para a outra) e cotovelos a 45° do corpo. Não desça além da linha do peito. Sem banco, faça flexão inclinada só se for confortável."),
  E("supino-incl","Supino inclinado com halteres",3,[10,12],75,["chest","delt","triceps"],["Banco com inclinação baixa.","Escápulas para trás e para baixo.","Desça devagar, suba sem bater os halteres."],"supino inclinado halteres execução",false,"Banco entre 15° e 30°, nunca muito em pé. Pegada neutra e amplitude curta se incomodar."),
  E("elev-lat","Elevação lateral com halteres",4,[12,15],60,["delt"],["Cotovelos levemente dobrados.","Leve os braços um pouco à frente do corpo, não totalmente para o lado.","Sem impulso. Carga leve e muito controle."],"elevação lateral halteres plano escapular",false,"Suba no máximo até a altura dos ombros, com o polegar levemente para cima. Se doer, troque pela elevação lateral na polia baixa com amplitude menor."),
  E("triceps-corda","Tríceps na polia com corda",4,[10,15],60,["triceps"],["Cotovelos colados ao corpo.","No final, abra a corda para os lados.","Volte até 90°, sem subir os cotovelos."],"tríceps corda polia"),
  E("triceps-uni","Tríceps unilateral na polia",3,[12,15],45,["triceps"],["Pegada invertida ou com a alça normal.","Cotovelo parado ao lado do corpo.","Estenda completamente e volte devagar."],"tríceps unilateral polia",true),
  E("elev-pernas","Elevação de pernas deitada",3,[12,15],45,["abs"],["Deitada, mãos ao lado do corpo ou sob o quadril.","Lombar colada no chão.","Suba as pernas juntas até 90° e desça sem encostar no chão."],"elevação de pernas deitada abdominal"),
  E("prancha-lat","Prancha lateral",2,[20,40],45,["abs"],["Apoio no antebraço, cotovelo embaixo do ombro.","Corpo em linha reta, quadril alto.","Faça os dois lados."],"prancha lateral correta",true,"Apoiar no lado direito pode incomodar a bursite. Se doer, faça a prancha lateral com os joelhos no chão ou só do lado esquerdo e troque o direito por mais uma série de elevação de pernas.","seg")
 ]},
 4:{nome:"Posteriores de coxa e glúteos",tipo:"Inferiores B",cardio:LO_CARDIO,ex:[
  E("rdl","Levantamento terra romeno com halteres",4,[8,12],90,["ham","glute","lowback"],["Joelhos levemente dobrados e fixos.","Leve o quadril para trás, halteres rentes às pernas.","Desça até sentir o posterior alongar, coluna reta.","Suba empurrando o quadril para frente."],"levantamento terra romeno halteres"),
  E("elev-pelvica-b","Elevação pélvica",4,[8,12],90,["glute","ham"],["Costas no banco, carga sobre o quadril.","Pés afastados, canelas verticais no topo.","Segure 2 segundos em cima apertando o glúteo."],"elevação pélvica barra execução"),
  E("flexora","Mesa flexora (deitada)",4,[10,12],60,["ham"],["Quadril colado no apoio, pernas travadas.","Puxe os calcanhares em direção ao glúteo.","Desça em 3 segundos, sem tirar o quadril do banco."],"mesa flexora deitada execução"),
  E("coice","Coice de glúteo na polia",3,[12,15],45,["glute"],["Tornozeleira na polia baixa.","Tronco inclinado, abdômen firme.","Leve a perna para trás sem arquear a lombar."],"coice glúteo polia",true),
  E("abdutora-b","Cadeira abdutora",3,[15,20],45,["glute"],["Tronco inclinado à frente.","Abra forte e volte em 2 segundos.","Segure 1 segundo aberta na última rep."],"cadeira abdutora glúteo"),
  E("ponte","Ponte de glúteos no chão",3,[15,20],60,["glute"],["Deitada, pés próximos ao glúteo.","Suba apertando o glúteo, sem arquear a lombar.","Finalizador: vá até queimar. Para progredir, coloque um halter no quadril."],"ponte de glúteos no chão"),
  E("pantu-sent","Panturrilha sentada",4,[15,20],45,["calf"],["Amplitude total: desça bem o calcanhar.","Pausa embaixo e em cima.","Ritmo controlado, sem quicar."],"panturrilha sentada máquina")
 ]},
 5:{nome:"Costas, bíceps, tríceps e abdômen",tipo:"Superiores C",cardio:UP_CARDIO,ex:[
  E("puxada-neutra","Puxada alta com pegada neutra",4,[10,12],75,["back","biceps"],["Barra de pegada neutra (triângulo ou paralela).","Puxe até a parte de cima do peito.","Ombros para baixo, longe das orelhas."],"puxada alta pegada neutra",false,"A pegada neutra é a mais amigável para o ombro. Se doer em cima, não estenda o braço por completo."),
  E("remada-uni-c","Remada unilateral com halter",4,[10,12],60,["back","biceps"],["Apoio firme no banco, tronco estável.","Puxe o halter em direção ao quadril.","Substitui a remada com apoio no peito."],"remada unilateral halter",true),
  E("remada-halteres","Remada curvada com halteres (pegada neutra)",3,[10,12],75,["back","rear"],["Tronco inclinado a uns 45°, coluna reta.","Puxe os dois halteres até a cintura.","Pausa de 1 segundo apertando as costas."],"remada curvada halteres pegada neutra"),
  E("rosca-w","Rosca bíceps com barra W",4,[10,12],60,["biceps","forearm"],["Cotovelos colados ao corpo.","Sem jogar o quadril.","Desça em 3 segundos."],"rosca barra w bíceps"),
  E("triceps-corda-c","Tríceps na polia com corda",3,[10,15],60,["triceps"],["Cotovelos fixos.","Abra a corda no final.","Controle a volta."],"tríceps corda polia"),
  E("triceps-coice","Tríceps coice com halter",3,[12,15],45,["triceps"],["Tronco inclinado, braço colado ao corpo.","Estenda o cotovelo até o braço ficar reto.","Segure 1 segundo e volte devagar."],"tríceps coice halter",true,"Mantém o ombro em posição neutra. Por isso entra no lugar do tríceps testa e do mergulho, que forçam mais a articulação."),
  E("abd-polia","Abdominal na polia",3,[12,15],45,["abs"],["Ajoelhada, corda ao lado do rosto.","Enrole o tronco levando os cotovelos aos joelhos.","O quadril fica parado."],"abdominal na polia ajoelhado"),
  E("dead-bug","Dead bug",3,[8,12],45,["abs"],["Deitada, lombar colada no chão.","Estenda braço e perna opostos devagar.","Volte e troque o lado."],"dead bug exercício abdominal",true)
 ]},
 6:{nome:"Glúteos e pernas completas",tipo:"Inferiores C",cardio:LO_CARDIO,ex:[
  E("bulgaro-c","Agachamento búlgaro com halteres",4,[8,10],90,["glute","quad"],["Pé de trás no banco.","Tronco levemente inclinado para frente.","Desça controlando e suba empurrando pelo calcanhar da frente."],"agachamento búlgaro halteres glúteo",true),
  E("leg-press-c","Leg press 45°",4,[10,12],90,["quad","glute"],["Pés mais altos na plataforma para pegar mais glúteo.","Desça fundo sem tirar o quadril do banco.","Não trave os joelhos.","Sem leg press 45°, use o horizontal ou agachamento com halter."],"leg press 45 pés altos glúteo"),
  E("flexao-pe-c","Flexão de joelho em pé com caneleira",3,[12,15],60,["ham"],["Tronco firme, segure no apoio.","Calcanhar em direção ao glúteo.","Volte devagar."],"flexão de joelho em pé caneleira",true),
  E("coice-c","Coice de glúteo na polia",3,[12,15],45,["glute"],["Tornozeleira na polia baixa.","Leve a perna para trás e um pouco para fora.","Sem arquear a lombar."],"coice glúteo polia",true),
  E("abdutora-c","Cadeira abdutora",3,[15,20],45,["glute"],["Tronco inclinado à frente.","Abra forte e volte em 2 segundos.","Últimas reps em meia amplitude."],"cadeira abdutora"),
  E("panturrilha","Panturrilha em pé com halteres",4,[12,20],45,["calf"],["Ponta dos pés em um degrau.","Desça o calcanhar o máximo possível.","Suba e segure 1 segundo em cima."],"panturrilha em pé halteres degrau",false,"Se segurar o halter incomodar o ombro direito, segure só na mão esquerda e apoie a direita na parede, ou use a máquina.")
 ]}
};
/* ---------- ALTERNATIVAS (botão de troca por exercício) ---------- */
const ALT = {
 smith:{nome:"Agachamento goblet com halter",anim:"goblet",dicas:["Segure um halter junto ao peito, cotovelos para baixo.","Desça entre os joelhos, tronco ereto.","Suba empurrando o chão com o pé inteiro."],ombro:"Sem barra nas costas: bem mais amigável ao ombro."},
 puxada:{nome:"Puxada alta com pegada neutra",anim:"pulldown",dicas:["Barra de pegada neutra (triângulo ou paralela).","Puxe até a parte de cima do peito.","Ombros para baixo, longe das orelhas."],ombro:"Pegada neutra é a mais confortável para o ombro."},
 "prancha-lat":{nome:"Dead bug",anim:"deadbug",musc:["abs"],dicas:["Deitada, lombar colada no chão.","Estenda o braço e a perna opostos devagar.","Alterne os lados sem arquear a lombar."],ombro:"Não apoia no braço, então não carrega o ombro."},
 prancha:{nome:"Prancha com apoio no banco",anim:"plank",dicas:["Antebraços sobre um banco, corpo inclinado.","Linha reta da cabeça aos calcanhares.","Glúteo e abdômen firmes."],ombro:"Apoio elevado reduz bastante a carga no ombro."},
 supino:{nome:"Supino com halteres (pegada neutra)",anim:"press",dicas:["Palmas viradas uma para a outra.","Desça só até a linha do peito.","Cotovelos a 45° do corpo."],ombro:"Pegada neutra e amplitude curta poupam o ombro."},
 "supino-incl":{nome:"Crucifixo na máquina (peck deck)",anim:"lateral",dicas:["Sente com as costas apoiadas.","Feche os braços apertando o peito.","Abra devagar sem forçar o ombro."],ombro:"A máquina guia o movimento e evita amplitude dolorosa."},
 "elev-lat":{nome:"Elevação lateral na polia baixa",anim:"lateral",dicas:["Polia baixa ao lado do corpo.","Suba até a altura do ombro, com amplitude menor.","Muito controle, sem impulso."],ombro:"Amplitude menor e tensão constante, melhor para a bursite."},
 "crucifixo-inv":{nome:"Crucifixo inverso na máquina",anim:"lateral",dicas:["Sente de frente para o apoio.","Abra os braços até a linha do corpo.","Movimento curto e controlado."],ombro:"A máquina guia o movimento, poupando o ombro."},
 flexora:{nome:"Flexão de joelho em pé com caneleira",anim:"kneecurl",dicas:["Segure num apoio, tronco firme.","Leve o calcanhar em direção ao glúteo.","Volte devagar. Use quando não houver mesa flexora."]},
 "flexao-pe-c":{nome:"Mesa flexora (deitada)",anim:"kneecurl",dicas:["Quadril colado no apoio.","Puxe os calcanhares até o glúteo.","Desça em 3 segundos."]}
};
function curEx(ex){
  const a = S.alt[ex.id] && ALT[ex.id];
  if(a) return {id:ex.id,series:ex.series,reps:ex.reps,desc:ex.desc,un:ex.un,lado:ex.lado,nome:a.nome,musc:a.musc||ex.musc,dicas:a.dicas,ombro:a.ombro,animId:a.anim,isAlt:true,hasAlt:true};
  return {id:ex.id,series:ex.series,reps:ex.reps,desc:ex.desc,un:ex.un,lado:ex.lado,nome:ex.nome,musc:ex.musc,dicas:ex.dicas,ombro:ex.ombro,animId:EXP[ex.id],isAlt:false,hasAlt:!!ALT[ex.id]};
}
const DIAS = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
const DIAS_LONGO = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];

/* ---------- ESTADO ---------- */
const KEY = "treinoPesado.v1";
let S = {cardioMin:20, sessions:{}, cardio:{}, peso:52, altura:150, idade:20, cfgV:2, alt:{}, notes:{}};
try{ const raw = localStorage.getItem(KEY); if(raw) S = Object.assign(S, JSON.parse(raw)); }catch(e){}
if(S.cfgV !== 2){ S.cardioMin = 20; S.cfgV = 2; }
S.alt = S.alt || {}; S.notes = S.notes || {}; S.sessions = S.sessions || {}; S.cardio = S.cardio || {};
const save = () => { try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){} };

const pad = n => String(n).padStart(2,"0");
const dkey = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const TODAY = new Date();
let selDay = TODAY.getDay();
function dateForDay(wd){ const d = new Date(TODAY); d.setDate(d.getDate() + (wd - TODAY.getDay())); return d; }
const fmtDate = k => { const [y,m,d] = k.split("-"); return `${d}/${m}`; };
const fmtKg = v => (v===""||v==null) ? "–" : String(v).replace(".",",");

function sess(date, exId){ return (S.sessions[date] && S.sessions[date][exId]) || []; }
function lastSession(exId, beforeDate){
  const ds = Object.keys(S.sessions).filter(d => d < beforeDate && S.sessions[d][exId] && S.sessions[d][exId].some(s => s && s.ok)).sort();
  if(!ds.length) return null;
  const d = ds[ds.length-1]; return {date:d, sets:S.sessions[d][exId].filter(s=>s&&s.ok)};
}
function suggestion(ex, last){
  if(!last) return {cls:"", txt:"Primeira vez: escolha uma carga em que a última repetição seja difícil, sobrando 1 ou 2 no tanque (RIR 1–2)."};
  const [lo,hi] = ex.reps;
  const kg = Math.max(...last.sets.map(s => parseFloat(String(s.kg).replace(",","."))||0));
  const allTop = last.sets.length >= ex.series && last.sets.every(s => (+s.r||0) >= hi);
  const anyLow = last.sets.some(s => (+s.r||0) < lo);
  const rirs = last.sets.map(s => s.rir).filter(v => v!=null && v!=="").map(Number);
  const inc = ["leg-press","leg-press-c","smith","rdl","elev-pelvica","elev-pelvica-b","remada-sentada","puxada"].includes(ex.id) ? 2.5 : 1;
  if(allTop){
    if(rirs.length && rirs.some(v => v<=0)) return {cls:"", txt:`Bateu ${hi} reps, mas sem sobra (RIR 0) em alguma série. Repita ${fmtKg(kg)} kg e só suba quando sobrar 1 a 2 reps.`};
    if(rirs.length && rirs.every(v => v>=2)) return {cls:"up", txt:`Bateu ${hi} reps sobrando 2+ no tanque. Pode subir com folga: ${fmtKg(+(kg+inc).toFixed(1))} kg (+${fmtKg(inc)} kg).`};
    return {cls:"up", txt:`Você bateu ${hi} reps em todas as séries. Suba para ${fmtKg(+(kg+inc).toFixed(1))} kg hoje (+${fmtKg(inc)} kg).`};
  }
  if(anyLow) return {cls:"hold", txt:`Ficou abaixo de ${lo} reps em alguma série. Mantenha ${fmtKg(kg)} kg e capriche no descanso.`};
  return {cls:"", txt:`Mantenha ${fmtKg(kg)} kg e tente +1 repetição por série até chegar a ${hi}.`};
}

/* ---------- MAPA MUSCULAR (SVG) ---------- */
function bodySVG(m){
  const on = k => m.includes(k) ? "var(--muscle-on)" : "var(--muscle)";
  const base = "var(--sunk)";
  const fig = (x, front) => `
  <g transform="translate(${x} 0)">
    <circle cx="30" cy="10" r="7" fill="${base}"/>
    <rect x="26" y="16" width="8" height="5" fill="${base}"/>
    <ellipse cx="17" cy="26" rx="6.5" ry="5.5" fill="${on(front?"delt":(m.includes("rear")?"rear":"delt"))}"/>
    <ellipse cx="43" cy="26" rx="6.5" ry="5.5" fill="${on(front?"delt":(m.includes("rear")?"rear":"delt"))}"/>
    ${front
      ? `<rect x="22" y="23" width="16" height="13" rx="5" fill="${on("chest")}"/>
         <rect x="24" y="37" width="12" height="20" rx="3" fill="${on("abs")}"/>
         <ellipse cx="13" cy="40" rx="4" ry="8" fill="${on("biceps")}"/>
         <ellipse cx="47" cy="40" rx="4" ry="8" fill="${on("biceps")}"/>`
      : `<path d="M22 22 h16 l2 18 l-4 16 h-12 l-4 -16z" fill="${on("back")}"/>
         <rect x="26" y="48" width="8" height="10" rx="2" fill="${on("lowback")}"/>
         <ellipse cx="13" cy="40" rx="4" ry="8" fill="${on("triceps")}"/>
         <ellipse cx="47" cy="40" rx="4" ry="8" fill="${on("triceps")}"/>`}
    <rect x="9.5" y="49" width="6" height="15" rx="3" fill="${on("forearm")}"/>
    <rect x="44.5" y="49" width="6" height="15" rx="3" fill="${on("forearm")}"/>
    ${front
      ? `<path d="M21 58 h18 l1 6 h-20z" fill="${base}"/>`
      : `<ellipse cx="25" cy="63" rx="6" ry="6" fill="${on("glute")}"/><ellipse cx="35" cy="63" rx="6" ry="6" fill="${on("glute")}"/>`}
    <ellipse cx="25" cy="83" rx="5.2" ry="13" fill="${on(front?"quad":"ham")}"/>
    <ellipse cx="35" cy="83" rx="5.2" ry="13" fill="${on(front?"quad":"ham")}"/>
    <ellipse cx="25" cy="106" rx="3.8" ry="9" fill="${front?base:on("calf")}"/>
    <ellipse cx="35" cy="106" rx="3.8" ry="9" fill="${front?base:on("calf")}"/>
    <text x="30" y="124" text-anchor="middle" font-size="7" fill="var(--muted)" font-family="Figtree,sans-serif">${front?"frente":"costas"}</text>
  </g>`;
  return `<svg viewBox="0 0 124 128" role="img" aria-label="Músculos trabalhados">${fig(0,true)}${fig(64,false)}</svg>`;
}
const ICON = {
  play:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`,
  img:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 17l-5-5-9 8"/></svg>`,
  check:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>`
};
const MUSC_PT = {back:"costas",biceps:"bíceps",rear:"ombro posterior",delt:"ombros",chest:"peito",triceps:"tríceps",forearm:"antebraço",abs:"abdômen",quad:"quadríceps",glute:"glúteos",ham:"posterior de coxa",calf:"panturrilha",lowback:"lombar"};
const restTxt = s => s>=60 ? `${Math.floor(s/60)}${s%60?":"+pad(s%60):""} min` : `${s}s`;
const repsTxt = ex => (ex.reps[0]===ex.reps[1] ? ex.reps[0] : `${ex.reps[0]}–${ex.reps[1]}`) + (ex.un?" seg":"") + (ex.lado?" cada lado":"");
const yt = q => "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);
const gimg = q => "https://www.google.com/search?tbm=isch&q=" + encodeURIComponent(q);

/* ---------- VÍDEOS (arquivos em /videos, um por exercício) ---------- */
const VIDEOS = {};
/* ---------- DEMONSTRAÇÕES ANIMADAS ---------- */
const SIDE = [["h","s"],["s","hip"],["hip","k"],["k","a"],["s","e"],["e","w"]];
const FRONT = [["h","n"],["n","sl"],["n","sr"],["n","pm"],["pm","pl"],["pm","pr"],["pl","kl"],["kl","fl"],["pr","kr"],["kr","fr"],["sl","el"],["el","wl"],["sr","er"],["er","wr"]];
const FRONT_BASE = {h:[100,24],n:[100,44],sl:[84,48],sr:[116,48],pm:[100,94],pl:[92,96],pr:[108,96],kl:[90,123],kr:[110,123],fl:[90,150],fr:[110,150],el:[80,72],wl:[79,96],er:[120,72],wr:[121,96]};
const STAND = {h:[100,22],s:[100,44],hip:[100,92],k:[102,121],a:[100,150],e:[102,70],w:[103,96]};
const P = {
 pulldown:{seg:SIDE,bench:[80,112,45,8],cable:[110,2,"w"],bar:"w",A:{h:[100,52],s:[100,70],hip:[100,110],k:[132,110],a:[132,148],e:[106,42],w:[110,14]},B:{e:[114,88],w:[110,62]},cap:"Sentada, puxe até o queixo e volte devagar"},
 rowcable:{seg:SIDE,bench:[55,118,50,8],cable:[195,108,"w"],bar:"w",A:{h:[96,40],s:[88,74],hip:[78,114],k:[112,104],a:[146,114],e:[112,88],w:[138,92]},B:{h:[92,40],s:[82,74],e:[60,96],w:[90,100]},cap:"Puxe até a barriga apertando as escápulas"},
 rowdb:{seg:SIDE,bench:[118,108,62,8],db:"w",A:{h:[142,66],s:[126,76],hip:[72,90],k:[76,121],a:[72,150],e:[126,104],w:[126,130]},B:{e:[104,70],w:[110,96]},cap:"Puxe o halter em direção ao quadril"},
 lateral:{seg:FRONT,db:["wl","wr"],A:FRONT_BASE,B:{el:[64,52],wl:[42,58],er:[136,52],wr:[158,58]},cap:"Vista de frente: suba só até a altura dos ombros"},
 curl:{seg:SIDE,db:"w",A:STAND,B:{w:[115,48]},cap:"Cotovelo parado, sobe e desce em 3 segundos"},
 curlbar:{seg:SIDE,bar:"w",A:STAND,B:{w:[115,48]},cap:"Cotovelo parado, sem balançar o quadril"},
 pushdown:{seg:SIDE,cable:[128,2,"w"],bar:"w",A:{...STAND,h:[102,22],s:[101,44],e:[104,72],w:[122,60]},B:{w:[110,98]},cap:"Cotovelos colados, estenda até o fim"},
 kickback:{seg:SIDE,bench:[120,108,60,8],db:"w",A:{h:[142,62],s:[124,74],hip:[72,90],k:[76,121],a:[72,150],e:[102,80],w:[104,106]},B:{w:[78,84]},cap:"Braço parado, estenda o cotovelo para trás"},
 press:{seg:SIDE,bench:[40,112,100,8],db:"w",A:{h:[138,98],s:[120,104],hip:[62,106],k:[34,104],a:[30,148],e:[104,118],w:[118,92]},B:{e:[119,80],w:[120,56]},cap:"Desça até a linha do peito, cotovelos a 45°"},
 incline:{seg:SIDE,bench:[50,112,80,8],db:"w",A:{h:[118,64],s:[108,82],hip:[70,108],k:[40,104],a:[34,148],e:[94,100],w:[110,80]},B:{e:[116,62],w:[124,40]},cap:"Banco baixo (15–30°), empurre sem travar"},
 squat:{seg:SIDE,A:{...STAND,e:[96,62],w:[106,46]},B:{h:[124,54],s:[116,72],hip:[78,112],k:[116,112],a:[100,150],e:[110,90],w:[122,74]},bar:"w",cap:"Desça como se fosse sentar atrás, peito alto"},
 goblet:{seg:SIDE,A:{...STAND,e:[108,70],w:[110,56]},B:{h:[124,54],s:[116,72],hip:[78,112],k:[116,112],a:[100,150],e:[128,96],w:[130,80]},db:"w",cap:"Agachamento: joelhos acompanham a ponta dos pés"},
 legpress:{seg:SIDE,bench:[40,104,50,8],plate:"a",A:{h:[38,58],s:[48,74],hip:[72,100],k:[88,60],a:[118,74],e:[64,92],w:[80,100]},B:{k:[112,76],a:[150,52]},cap:"Empurre sem travar os joelhos, quadril colado"},
 extension:{seg:SIDE,bench:[60,108,50,8],db:"a",A:{h:[78,42],s:[78,62],hip:[82,106],k:[116,106],a:[118,146],e:[86,86],w:[100,104]},B:{a:[156,98]},cap:"Estenda e segure 1 segundo em cima"},
 bulgarian:{seg:[...SIDE,["hip","k2"],["k2","a2"]],bench:[30,110,40,8],db:"w",A:{h:[96,20],s:[94,40],hip:[90,88],k:[118,118],a:[118,150],k2:[72,118],a2:[50,108],e:[94,64],w:[94,90]},B:{h:[100,46],s:[96,66],hip:[88,112],k:[124,114],k2:[80,142],e:[96,90],w:[96,116]},cap:"Pé de trás no banco, desça reto"},
 lunge:{seg:[...SIDE,["hip","k2"],["k2","a2"]],db:"w",A:{h:[100,20],s:[98,40],hip:[94,88],k:[116,118],a:[124,150],k2:[80,120],a2:[64,150],e:[98,64],w:[98,90]},B:{h:[100,46],s:[98,66],hip:[92,112],k:[124,114],k2:[78,142],e:[98,90],w:[98,116]},cap:"Passo longo, joelho de trás quase no chão"},
 hinge:{seg:SIDE,db:"w",A:{...STAND,e:[100,68],w:[100,94]},B:{h:[146,62],s:[130,70],hip:[80,92],k:[104,121],e:[128,96],w:[126,120]},cap:"Quadril para trás, coluna reta, halteres rentes"},
 hipthrust:{seg:SIDE,bench:[18,96,36,54],bar:"hip",A:{h:[36,84],s:[52,96],hip:[86,134],k:[124,108],a:[138,150],e:[70,112],w:[86,128]},B:{hip:[96,96],k:[134,96],e:[74,96],w:[94,92]},cap:"Suba até alinhar joelho, quadril e ombro"},
 bridge:{seg:SIDE,db:"hip",A:{h:[28,140],s:[46,144],hip:[84,146],k:[112,118],a:[130,150],e:[66,146],w:[84,146]},B:{hip:[92,116],k:[122,104],w:[90,118],e:[68,132]},cap:"Aperte o glúteo em cima, sem arquear a lombar"},
 glutekick:{seg:[...SIDE,["hip","k2"],["k2","a2"]],cable:[190,148,"a2"],A:{h:[132,32],s:[122,50],hip:[94,90],k:[98,121],a:[97,150],k2:[100,120],a2:[96,148],e:[140,64],w:[156,62]},B:{k2:[66,104],a2:[40,92]},cap:"Leve a perna para trás sem arquear a lombar"},
 kneecurl:{seg:[...SIDE,["hip","k2"],["k2","a2"]],weight2:"a2",A:{h:[110,22],s:[106,44],hip:[100,92],k:[102,121],a:[100,150],k2:[104,120],a2:[102,148],e:[124,62],w:[142,66]},B:{a2:[76,104]},cap:"Calcanhar em direção ao glúteo, volta devagar"},
 abduction:{seg:FRONT,bench:[70,96,60,8],A:{...FRONT_BASE,kl:[90,118],kr:[110,118],fl:[90,146],fr:[110,146],el:[80,70],wl:[84,92],er:[120,70],wr:[116,92]},B:{kl:[66,114],kr:[134,114],fl:[64,142],fr:[136,142]},cap:"Vista de frente: abra forte, feche em 2 segundos"},
 bandabd:{seg:FRONT,band:["kl","kr"],A:FRONT_BASE,B:{kr:[118,123],fr:[136,148]},cap:"Vista de frente: leve a perna para o lado"},
 calf:{seg:[...SIDE,["a","toe"]],db:"w",A:{...STAND,toe:[116,150]},B:{h:[100,10],s:[100,32],hip:[100,80],k:[102,109],a:[104,138],e:[102,58],w:[103,84]},cap:"Suba na ponta dos pés e segure 1 segundo"},
 plank:{seg:SIDE,A:{h:[164,104],s:[148,112],hip:[100,126],k:[70,136],a:[40,146],e:[150,146],w:[176,146]},B:{hip:[100,122]},cap:"Corpo reto, abdômen e glúteo contraídos"},
 sideplank:{seg:FRONT.filter(([a,b])=>!["kr","fr","er","wr"].includes(b)),A:{h:[160,96],n:[146,104],sl:[140,110],sr:[150,98],pm:[100,124],pl:[96,128],pr:[102,120],kl:[70,136],kr:[70,130],fl:[40,146],fr:[40,140],el:[140,146],wl:[162,146],er:[150,98],wr:[150,98]},B:{pm:[100,118],pl:[96,122],pr:[102,114]},cap:"Quadril alto, corpo em linha reta"},
 legraise:{seg:SIDE,A:{h:[150,142],s:[132,146],hip:[90,146],k:[60,142],a:[30,138],e:[112,148],w:[96,148]},B:{k:[92,116],a:[94,86]},cap:"Lombar colada no chão, desça sem encostar"},
 deadbug:{seg:[...SIDE,["hip","k2"],["k2","a2"],["s","e2"],["e2","w2"]],A:{h:[134,140],s:[116,146],hip:[74,146],k:[74,116],a:[48,116],k2:[76,118],a2:[50,118],e:[116,124],w:[116,102],e2:[118,124],w2:[118,102]},B:{k:[46,142],a:[18,140],e:[136,132],w:[158,140]},cap:"Estenda braço e perna opostos devagar"},
 cablecrunch:{seg:[...SIDE],cable:[112,2,"w"],A:{h:[108,42],s:[104,60],hip:[100,108],k:[100,150],a:[70,150],e:[118,58],w:[110,46]},B:{h:[148,112],s:[136,100],e:[146,96],w:[146,112]},cap:"Enrole o tronco, o quadril fica parado"}
};
const EXP = {"puxada":"pulldown","puxada-neutra":"pulldown","remada-sentada":"rowcable","remada-uni":"rowdb","remada-uni-c":"rowdb","remada-halteres":"rowdb","crucifixo-inv":"lateral","rosca-halter":"curl","rosca-martelo":"curl","rosca-w":"curlbar","prancha":"plank","prancha-lat":"sideplank","leg-press":"legpress","leg-press-c":"legpress","smith":"squat","bulgaro":"bulgarian","bulgaro-c":"bulgarian","extensora":"extension","elev-pelvica":"hipthrust","elev-pelvica-b":"hipthrust","abdutora":"abduction","abdutora-b":"abduction","abdutora-c":"abduction","supino":"press","supino-incl":"incline","elev-lat":"lateral","triceps-corda":"pushdown","triceps-corda-c":"pushdown","triceps-uni":"pushdown","triceps-coice":"kickback","elev-pernas":"legraise","rdl":"hinge","flexao-pe":"kneecurl","flexao-pe-c":"kneecurl","coice":"glutekick","coice-c":"glutekick","ponte":"bridge","abd-polia":"cablecrunch","dead-bug":"deadbug","panturrilha":"calf","flexora":"kneecurl","pantu-sent":"calf"};
function animSVG(exId, over, nomeAtual){
  if(VIDEOS[exId]) return `<figure class="anim"><video src="/videos/${VIDEOS[exId]}" autoplay loop muted playsinline preload="metadata" style="width:100%;border-radius:8px;display:block"></video><figcaption><span class="live">Vídeo</span>${nomeAtual || PLAN_NAME(exId)}</figcaption></figure>`;
  const k = over || EXP[exId]; if(!k || !P[k]) return "";
  return `<figure class="anim"><svg viewBox="0 0 200 160" data-anim="${k}" role="img" aria-label="Demonstração animada: ${P[k].cap}"></svg><figcaption><span class="live">Demonstração</span>${P[k].cap}</figcaption></figure>`;
}
// ——— utilidades de desenho do avatar (flat design / vector art) ———
const _u = (u,v)=>{ const dx=v[0]-u[0], dy=v[1]-u[1], L=Math.hypot(dx,dy)||1; return [dx/L,dy/L]; };
const _f = n => n[0].toFixed(1)+" "+n[1].toFixed(1);
const _mix = (a,b,f)=>[a[0]+(b[0]-a[0])*f, a[1]+(b[1]-a[1])*f];
// cápsula com raios diferentes nas pontas: tronco de cone + círculos nas juntas (fundem sem emenda)
function capsule(u,v,r1,r2,fill){
  const d=_u(u,v), px=-d[1], py=d[0];
  const a=[u[0]+px*r1,u[1]+py*r1], b=[u[0]-px*r1,u[1]-py*r1];
  const c=[v[0]-px*r2,v[1]-py*r2], e=[v[0]+px*r2,v[1]+py*r2];
  return `<path d="M${_f(a)} L${_f(b)} L${_f(c)} L${_f(e)} Z" fill="${fill}"/>`
    + `<circle cx="${u[0].toFixed(1)}" cy="${u[1].toFixed(1)}" r="${r1}" fill="${fill}"/>`
    + `<circle cx="${v[0].toFixed(1)}" cy="${v[1].toFixed(1)}" r="${r2}" fill="${fill}"/>`;
}
const blob = (c,r,fill)=>`<circle cx="${c[0].toFixed(1)}" cy="${c[1].toFixed(1)}" r="${r}" fill="${fill}"/>`;

function drawPose(svg, t){
  const p = P[svg.dataset.anim]; const A = p.A, B = p.B;
  const ease = x => x<.5 ? 2*x*x : 1-Math.pow(-2*x+2,2)/2;
  const e = ease(t);
  const pt = n => { const a = A[n], b = B[n] || a; return [a[0]+(b[0]-a[0])*e, a[1]+(b[1]-a[1])*e]; };
  const has = n => A[n] !== undefined;
  const front = p.seg.some(([a]) => a==="n");
  const SK="var(--skin)", TOP="var(--top)", LEG="var(--legging)", HAIR="var(--hair)", SHOE="var(--shoe)", IRON="var(--iron)", HI="var(--hi)";

  // chão + equipamentos ao fundo
  let bg = `<line x1="0" y1="152" x2="200" y2="152" stroke="var(--line)" stroke-width="2"/>`;
  if(p.bench){ const [x,y,w,h]=p.bench; bg += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="var(--muted)" opacity=".4"/>`; }
  if(p.cable){ const [cx,cy,to]=p.cable, q=pt(to); bg += `<line x1="${cx}" y1="${cy}" x2="${q[0].toFixed(1)}" y2="${q[1].toFixed(1)}" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="3 3"/><circle cx="${cx}" cy="${cy}" r="3.5" fill="var(--muted)"/>`; }
  if(p.band){ const a=pt(p.band[0]), b=pt(p.band[1]); bg += `<path d="M${_f(a)} Q${((a[0]+b[0])/2).toFixed(1)} ${((a[1]+b[1])/2+6).toFixed(1)} ${_f(b)}" stroke="var(--warn)" stroke-width="3" fill="none" stroke-linecap="round"/>`; }

  const legSkin=(hp,kn,an)=> capsule(pt(hp),pt(kn),8.5,6,SK)+capsule(pt(kn),pt(an),6,4.3,SK);
  const shoe=(an,toeN)=>{ const q=pt(an); if(toeN&&has(toeN)) return capsule(q,pt(toeN),4.2,3,SHOE); return `<ellipse cx="${(q[0]+(front?0:4)).toFixed(1)}" cy="${(q[1]+1).toFixed(1)}" rx="${front?4.5:7}" ry="4" fill="${SHOE}"/>`; };

  let body="";
  if(front){
    const sl=pt("sl"),sr=pt("sr"),pm=pt("pm"),pl=pt("pl"),pr=pt("pr");
    const topC=_mix(sl,sr,.5), hipC=_mix(pl,pr,.5);
    const rSh=9, rW=6.2, rHip=Math.max(Math.hypot(pr[0]-pl[0],pr[1]-pl[1])/2, 9)+2;
    body += legSkin("pl","kl","fl")+legSkin("pr","kr","fr");
    body += shoe("fl")+shoe("fr");
    body += capsule(pl,_mix(pl,pt("kl"),.36),rHip*.6,6,LEG)+capsule(pr,_mix(pr,pt("kr"),.36),rHip*.6,6,LEG);
    body += capsule(topC,pm,rSh,rW,TOP)+capsule(pm,hipC,rW,rHip,LEG);
    body += capsule(topC,sl,4,3.2,TOP)+capsule(topC,sr,4,3.2,TOP)+blob(sl,5,TOP)+blob(sr,5,TOP);
    const ta=_u(topC,pm); body += capsule([topC[0]-ta[1]*rSh*.4,topC[1]+ta[0]*rSh*.4],[pm[0]-ta[1]*rW*.3,pm[1]+ta[0]*rW*.3],2.4,1.3,HI);
  } else {
    const s=pt("s"), hip=pt("hip"), waist=_mix(s,hip,.42);
    if(has("k2")){ body += capsule(pt("hip"),pt("k2"),8,6,SK)+capsule(pt("k2"),pt("a2"),6,4.3,SK)+shoe("a2"); }
    body += legSkin("hip","k","a")+shoe("a","toe");
    body += capsule(hip,_mix(hip,pt("k"),.34),9,6.2,LEG);
    if(has("k2")) body += capsule(hip,_mix(hip,pt("k2"),.34),9,6.2,LEG);
    body += capsule(s,waist,8,5.6,TOP)+capsule(waist,hip,5.6,10,LEG);
    const ta=_u(s,hip); body += capsule([s[0]-ta[1]*4,s[1]+ta[0]*4],[waist[0]-ta[1]*3,waist[1]+ta[0]*3],2.2,1.3,HI);
  }

  // pescoço, cabeça, cabelo e rabo de cavalo
  const hd=pt("h"), nk=pt(front?"n":"s");
  const dn=_u(hd,nk), ux=-dn[0], uy=-dn[1], sx=-uy, sy=ux, R=8.6;
  body += capsule([hd[0]+dn[0]*6,hd[1]+dn[1]*6], nk, 3.4,3.8, SK);
  const sw=(t-.5)*2;
  const base=[hd[0]+ux*R*.5+sx*R*.3, hd[1]+uy*R*.5+sy*R*.3];
  const mid=[base[0]-ux*5+sx*(sw*7-2), base[1]-uy*5+sy*(sw*7-2)];
  const tip=[mid[0]-ux*7+sx*(sw*9-3), mid[1]-uy*7+sy*(sw*9-3)];
  let head = capsule(base,mid,4.2,3.2,HAIR)+capsule(mid,tip,3.2,1.6,HAIR)+blob(base,4.6,HAIR);
  head += blob([hd[0]-ux*1.2,hd[1]-uy*1.2],R+2,HAIR)+blob(hd,R,SK);
  const cr=[hd[0]+ux*R*.55,hd[1]+uy*R*.55];
  head += `<path d="M${(hd[0]-sx*R).toFixed(1)} ${(hd[1]-sy*R).toFixed(1)} Q${_f(cr)} ${(hd[0]+sx*R).toFixed(1)} ${(hd[1]+sy*R).toFixed(1)} Q${(hd[0]+ux*R*.3).toFixed(1)} ${(hd[1]+uy*R*.3).toFixed(1)} ${(hd[0]-sx*R).toFixed(1)} ${(hd[1]-sy*R).toFixed(1)} Z" fill="${HAIR}"/>`;
  body += head;

  // braços (na frente)
  const arm=(sh,el,wr)=>{ let r=""; if(has(el)) r+=capsule(pt(sh),pt(el),5.4,4.2,SK)+blob(pt(sh),5.2,TOP); if(has(wr)) r+=capsule(pt(el),pt(wr),4.2,3.3,SK)+blob(pt(wr),3.6,SK); return r; };
  if(front){ body += arm("sl","el","wl")+arm("sr","er","wr"); }
  else { body += arm("s","e","w"); if(has("e2")) body += arm("s","e2","w2"); }

  // equipamentos nas mãos (na frente)
  let eq="";
  [].concat(p.db||[]).forEach(n=>{ const q=pt(n); eq += `<rect x="${(q[0]-9).toFixed(1)}" y="${(q[1]-4.5).toFixed(1)}" width="18" height="9" rx="3.5" fill="${IRON}"/><circle cx="${(q[0]-7).toFixed(1)}" cy="${q[1].toFixed(1)}" r="5" fill="${IRON}"/><circle cx="${(q[0]+7).toFixed(1)}" cy="${q[1].toFixed(1)}" r="5" fill="${IRON}"/>`; });
  [].concat(p.weight2||[]).forEach(n=>{ eq += blob(pt(n),5.5,IRON); });
  if(p.bar){ const q=pt(p.bar); eq += `<line x1="${(q[0]-5).toFixed(1)}" y1="${q[1].toFixed(1)}" x2="${(q[0]+5).toFixed(1)}" y2="${q[1].toFixed(1)}" stroke="${IRON}" stroke-width="11" stroke-linecap="round"/>`; }
  if(p.plate){ const q=pt(p.plate); eq += `<circle cx="${q[0].toFixed(1)}" cy="${q[1].toFixed(1)}" r="11" fill="none" stroke="${IRON}" stroke-width="5"/>`; }

  svg.innerHTML = bg + body + eq;
}
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const CYCLE = 3200;
function animLoop(now){
  const ph = (now % CYCLE) / CYCLE;
  // ida 40%, pausa 10%, volta 40%, pausa 10%
  const t = ph < .4 ? ph/.4 : ph < .5 ? 1 : ph < .9 ? 1-(ph-.5)/.4 : 0;
  document.querySelectorAll("details[open] svg[data-anim]").forEach(svg => drawPose(svg, REDUCED ? 1 : t));
  requestAnimationFrame(animLoop);
}
requestAnimationFrame(animLoop);

/* ---------- TELAS ---------- */
const app = document.getElementById("app");
let openEx = null;

function viewHoje(){
  const date = dkey(dateForDay(selDay));
  const isToday = selDay === TODAY.getDay();
  const days = [1,2,3,4,5,6,0].map(i => `<button class="day ${i===TODAY.getDay()?"today":""}" type="button" data-day="${i}" aria-pressed="${i===selDay}"><small>${DIAS[i]}</small><b>${i===0?"–":(PLAN[i].tipo.startsWith("Sup")?"S":"I")}</b></button>`).join("");
  const p = PLAN[selDay];
  if(!p){
    return `<div class="days">${days}</div>
    <div class="rest-card"><span class="eyebrow">Domingo</span><h1>Descanso</h1>
    <p class="muted" style="margin:0">O músculo cresce na recuperação. Durma 8 horas, coma bem e faça só uma caminhada leve se quiser. Amanhã é dia de costas, bíceps e abdômen.</p></div>`;
  }
  let doneEx = 0;
  const cards = p.ex.map((ex,i) => {
    const cx = curEx(ex);
    const cur = sess(date, ex.id);
    const okN = cur.filter(s=>s&&s.ok).length;
    const done = okN >= ex.series; if(done) doneEx++;
    const last = lastSession(ex.id, date);
    const sug = suggestion(cx, last);
    const lastTxt = last ? `Última vez (${fmtDate(last.date)}): ${fmtKg(last.sets[0].kg)} kg × ${last.sets.map(s=>s.r).join(", ")}` : "Ainda sem registro deste exercício.";
    const unit = cx.un ? "s" : "";
    const rows = Array.from({length:ex.series}, (_,j) => {
      const s = cur[j] || {}; const ls = last && last.sets[j];
      const rir = s.rir;
      const rirChips = [0,1,2].map(v => `<button class="rir" type="button" data-rir="${ex.id}" data-i="${j}" data-v="${v}" aria-pressed="${String(rir)===String(v)}" aria-label="RIR ${v} na série ${j+1}">${v}</button>`).join("");
      return `<div class="setgrp">
        <div class="set">
        <span class="n">${j+1}</span>
        <input id="kg-${ex.id}-${j}" inputmode="decimal" placeholder="${ls?fmtKg(ls.kg):"kg"}" value="${s.kg??""}" data-ex="${ex.id}" data-i="${j}" data-f="kg" aria-label="Carga da série ${j+1} em kg">
        <input id="r-${ex.id}-${j}" inputmode="numeric" placeholder="${ex.reps[1]}" value="${s.r??""}" data-ex="${ex.id}" data-i="${j}" data-f="r" aria-label="Repetições da série ${j+1}">
        <button class="chk" type="button" data-ok="${ex.id}" data-i="${j}" aria-pressed="${!!s.ok}" aria-label="Concluir série ${j+1}">${ICON.check}</button>
        </div>
        <div class="setmeta"><span class="prev num">Anterior: ${ls?`${fmtKg(ls.kg)} kg × ${ls.r}${unit}`:"—"}</span><span class="rirbox" title="Repetições de reserva: quantas ainda sobraram no tanque"><span class="rirlbl">RIR</span>${rirChips}</span></div>
      </div>`;}).join("");
    const nota = (S.notes[date] && S.notes[date][ex.id]) || "";
    return `<details class="ex ${done?"done":""}" data-exid="${ex.id}" ${openEx===ex.id?"open":""}>
      <summary><span class="idx">${i+1}</span><span class="t"><b>${cx.nome}</b>${cx.isAlt?' <span class="pill acc" style="font-size:10px">alternativa</span>':""}<span class="num">${ex.series} × ${repsTxt(cx)} · descanso ${restTxt(ex.desc)}</span></span><span class="pill ${done?"ok":""} num">${okN}/${ex.series}</span></summary>
      <div class="body">
        ${animSVG(ex.id, cx.animId, cx.nome)}
        ${cx.hasAlt?`<button class="btn sm swap" type="button" data-alt="${ex.id}">${cx.isAlt?"↩ Voltar ao exercício original":"⇄ Trocar por alternativa"}</button>`:""}
        <div class="demo">${bodySVG(cx.musc)}<div><div class="eyebrow" style="margin-bottom:6px">${cx.musc.map(k=>MUSC_PT[k]).join(" · ")}</div><ol>${cx.dicas.map(d=>`<li>${d}</li>`).join("")}</ol></div></div>
        ${cx.ombro?`<div class="tip hold"><b>Ombro direito:</b> ${cx.ombro}</div>`:""}
        <div class="tip ${sug.cls}"><div style="font-weight:600;margin-bottom:2px">${lastTxt}</div>${sug.txt}</div>
        <div class="sets"><div class="hd"><span style="text-align:center">Série</span><span style="text-align:center">kg</span><span style="text-align:center">${cx.un||"reps"}</span><span></span></div>${rows}</div>
        <div class="notewrap"><label class="eyebrow" for="nota-${ex.id}">Nota / feedback (ombro, estalido, esforço)</label><textarea id="nota-${ex.id}" class="nota" data-nota="${ex.id}" rows="2" placeholder="Ex.: senti um leve incômodo no ombro na última série">${nota.replace(/</g,"&lt;")}</textarea></div>
      </div></details>`;
  }).join("");
  const c = S.cardio[date] || {};
  const pct = Math.round(doneEx / p.ex.length * 100);
  return `<div class="days">${days}</div>
  <section class="hero"><div><div class="eyebrow">${DIAS_LONGO[selDay]}${isToday?" · hoje":""} · ${p.tipo}</div><h1>${p.nome}</h1></div>
   <div class="meta"><span class="pill acc">${p.ex.length} exercícios</span><span class="pill">+ ${S.cardioMin} min cardio</span></div></section>
  <div class="bar" aria-label="Progresso do treino"><i style="width:${pct}%"></i></div>
  ${p.aviso?`<div class="tip hold">${p.aviso}</div>`:""}
  <p class="muted" style="margin:0;font-size:13.5px">Aqueça 5 min e faça 2 séries leves no primeiro exercício. Use carga pesada: as últimas 1–2 repetições de cada série devem ser difíceis.</p>
  <div class="list">${cards}</div>
  <section class="cardio" id="cardio">
    <div class="row"><div><div class="eyebrow muted">Cardio pós-treino</div><h2>${p.cardio.tipo}</h2></div>${c.ok?`<span class="pill ok">Feito</span>`:""}</div>
    <p class="muted" style="margin:0;font-size:14px">${p.cardio.det}</p>
    <div class="row"><span class="clock" id="cclock">${fmtClock(cardioLeft())}</span>
      <span style="display:flex;gap:8px"><button class="btn pri" type="button" id="cgo">${cardioRun?"Pausar":"Iniciar"}</button><button class="btn" type="button" id="creset">Zerar</button></span></div>
    <div class="bar"><i id="cbar" style="width:${cardioPct()}%"></i></div>
    <button class="btn" type="button" id="cdone" data-date="${date}">${c.ok?"Desmarcar cardio":"Marcar cardio como feito"}</button>
  </section>`;
}

function viewSemana(){
  const items = [1,2,3,4,5,6].map(i => { const p = PLAN[i];
    const d = dkey(dateForDay(i)); const n = p.ex.filter(ex => sess(d,ex.id).filter(s=>s&&s.ok).length >= ex.series).length;
    return `<article class="wk"><header><div><div class="eyebrow">${DIAS_LONGO[i]} · ${p.tipo}</div><h3>${p.nome}</h3></div><span class="pill ${n===p.ex.length?"ok":""} num">${n}/${p.ex.length}</span></header>
    <ul>${p.ex.map(ex=>`<li>${ex.nome} <span class="num">${ex.series}×${repsTxt(ex)}</span></li>`).join("")}<li>${p.cardio.tipo}, ${S.cardioMin} min</li></ul>
    <button class="btn sm" type="button" data-go="${i}" style="align-self:flex-start">Abrir treino</button></article>`; }).join("");
  return `<section><div class="eyebrow">Divisão 6× por semana</div><h1>Semana</h1></section>
  <p class="muted" style="margin:0">Mesma divisão do seu treino anterior, com mais volume: os exercícios principais passaram de 3 para 4 séries, os de 2 séries foram para 3, e cada dia ganhou um exercício. Os itens marcados com alerta têm ajuste para a bursite no ombro direito. O abdômen fica sempre no fim dos treinos de superiores.</p>
  <div class="week">${items}
  <article class="wk"><header><div><div class="eyebrow">Domingo</div><h3>Descanso total</h3></div></header></article></div>
  <div class="panel"><h3>Como progredir</h3>
  <p style="margin:0;font-size:14px">O app usa <b>progressão dupla</b>: comece no menor número de repetições da faixa. Quando fizer o número máximo em todas as séries, suba a carga (1 kg nos halteres e máquinas, 2,5 kg nos básicos com barra). A cada 6 semanas, faça uma semana mais leve com metade das séries para recuperar.</p></div>`;
}

function viewProgresso(){
  const all = Object.values(PLAN).flatMap(p => p.ex.map(ex => ({ex, tipo:p.tipo})));
  const rows = all.map(({ex,tipo}) => {
    const pts = Object.keys(S.sessions).sort().map(d => { const ok = (S.sessions[d][ex.id]||[]).filter(s=>s&&s.ok);
      if(!ok.length) return null; return {d, kg:Math.max(...ok.map(s=>parseFloat(String(s.kg).replace(",","."))||0)), r:ok.map(s=>s.r)}; }).filter(Boolean);
    if(!pts.length) return "";
    const best = Math.max(...pts.map(p=>p.kg)), first = pts[0].kg, last = pts[pts.length-1];
    const diff = last.kg - first;
    let spark = "";
    if(pts.length > 1){
      const mn = Math.min(...pts.map(p=>p.kg)), mx = best, W=300, H=40, rng = (mx-mn)||1;
      const xy = pts.map((p,i)=>[4 + i*(W-8)/(pts.length-1), H-6 - (p.kg-mn)/rng*(H-12)]);
      const line = xy.map(([x,y],i)=>`${i?"L":"M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
      const [ex2,ey2] = xy[xy.length-1];
      spark = `<div class="spark"><svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true"><path d="${line} L${ex2} ${H} L4 ${H}Z" fill="var(--accent-soft)"/><path d="${line}" fill="none" stroke="var(--accent)" stroke-width="2" vector-effect="non-scaling-stroke"/><circle cx="${ex2}" cy="${ey2}" r="3.5" fill="var(--accent)"/></svg></div>`;
    }
    return `<article class="prog"><div style="min-width:0"><div class="eyebrow">${tipo}</div><b>${ex.nome}</b><div class="muted num" style="font-size:13px">Último ${fmtDate(last.d)}: ${fmtKg(last.kg)} kg × ${last.r.join(", ")} · ${pts.length} treino${pts.length>1?"s":""}</div></div>
      <div style="text-align:right"><div class="num" style="font-family:var(--display);font-size:24px;font-weight:700">${fmtKg(best)} kg</div><span class="pill ${diff>0?"ok":""} num">${diff>0?"+":""}${fmtKg(+diff.toFixed(1))} kg</span></div>${spark}</article>`;
  }).join("");
  const nTreinos = Object.keys(S.sessions).filter(d => Object.values(S.sessions[d]).some(a => a.some(s=>s&&s.ok))).length;
  const nCardio = Object.values(S.cardio).filter(c=>c.ok).length;
  return `<section><div class="eyebrow">Suas cargas</div><h1>Progresso</h1></section>
  <div class="panel"><dl class="kv num"><dt>Dias treinados</dt><dd>${nTreinos}</dd><dt>Cardios feitos</dt><dd>${nCardio} (${nCardio*S.cardioMin} min)</dd></dl></div>
  <div class="list">${rows || `<div class="empty">Aqui aparece a evolução da carga de cada exercício. Registre o primeiro treino na aba Treino: preencha kg e reps e toque no ✓ de cada série.</div>`}</div>`;
}

function viewAjustes(){
  const imc = (S.peso / Math.pow(S.altura/100,2)).toFixed(1).replace(".",",");
  const protLo = Math.round(S.peso*1.8), protHi = Math.round(S.peso*2.2);
  return `<section><div class="eyebrow">Perfil e ajustes</div><h1>Perfil</h1></section>
  <div class="panel"><h3>Seus dados</h3>
    <div class="field"><label for="f-idade">Idade</label><input id="f-idade" inputmode="numeric" value="${S.idade}" data-cfg="idade"></div>
    <div class="field"><label for="f-alt">Altura (cm)</label><input id="f-alt" inputmode="numeric" value="${S.altura}" data-cfg="altura"></div>
    <div class="field"><label for="f-peso">Peso (kg)</label><input id="f-peso" inputmode="decimal" value="${S.peso}" data-cfg="peso"></div>
    <div class="field"><label for="f-cardio">Cardio por dia (min)</label><input id="f-cardio" inputmode="numeric" value="${S.cardioMin}" data-cfg="cardioMin"></div>
  </div>
  <div class="panel"><h3>Para crescer</h3>
    <dl class="kv num"><dt>IMC</dt><dd>${imc}</dd><dt>Proteína por dia</dt><dd>${protLo}–${protHi} g</dd><dt>Calorias</dt><dd>Leve superávit, cerca de +200 a 300 kcal</dd><dt>Ganho alvo</dt><dd>0,25 a 0,5 kg por mês</dd></dl>
    <p class="muted" style="margin:0;font-size:13.5px">Com o corpo já definido, ganhar massa pede comer um pouco acima do gasto. O cardio de ${S.cardioMin} min queima calorias, então compense na comida. Se o peso não subir em 3 semanas, aumente cerca de 150 kcal. Um nutricionista pode ajustar isso para você.</p>
  </div>
  <div class="panel"><h3>Backup dos registros</h3>
    <p class="muted" style="margin:0;font-size:13.5px">Os registros ficam salvos neste celular. Copie o código abaixo e guarde em uma nota para não perder ao trocar de aparelho ou limpar o navegador.</p>
    <textarea id="bk" readonly>${JSON.stringify(S)}</textarea>
    <div class="links"><button class="btn sm pri" type="button" id="bk-copy">Copiar backup</button></div>
    <label for="bk-in" class="eyebrow">Restaurar: cole um backup aqui</label>
    <textarea id="bk-in" placeholder='{"cardioMin":20,...}'></textarea>
    <div class="links"><button class="btn sm" type="button" id="bk-load">Restaurar backup</button><span id="bk-msg" class="muted" style="font-size:13px;align-self:center"></span></div>
  </div>
  <p class="muted" style="font-size:12.5px;margin:0">Treino planejado para hipertrofia em praticante já treinada. Se sentir dor articular, reduza a carga e procure um profissional de educação física.</p>`;
}

/* ---------- ROTEAMENTO ---------- */
const VIEWS = {hoje:viewHoje, semana:viewSemana, progresso:viewProgresso, ajustes:viewAjustes};
function tab(){ const h = location.hash.slice(1); return VIEWS[h] ? h : "hoje"; }
function render(){
  const t = tab();
  app.innerHTML = VIEWS[t]();
  document.querySelectorAll("nav.tabs a").forEach(a => a.setAttribute("aria-current", a.dataset.tab===t ? "page" : "false"));
}
window.addEventListener("hashchange", () => { window.scrollTo(0,0); render(); });

/* ---------- EVENTOS ---------- */
app.addEventListener("click", e => {
  const day = e.target.closest("[data-day]");
  if(day){ selDay = +day.dataset.day; openEx = null; render(); return; }
  const go = e.target.closest("[data-go]");
  if(go){ selDay = +go.dataset.go; openEx = null; location.hash = "hoje"; render(); return; }
  const alt = e.target.closest("[data-alt]");
  if(alt){ const id = alt.dataset.alt; S.alt[id] = !S.alt[id]; save(); openEx = id; render(); return; }
  const rir = e.target.closest("[data-rir]");
  if(rir){
    const date = dkey(dateForDay(selDay)), id = rir.dataset.rir, i = +rir.dataset.i, v = +rir.dataset.v;
    S.sessions[date] ??= {}; S.sessions[date][id] ??= [];
    const s = S.sessions[date][id][i] ??= {};
    s.rir = (String(s.rir)===String(v)) ? "" : v;
    save(); openEx = id; render(); return;
  }
  const ok = e.target.closest("[data-ok]");
  if(ok){
    const date = dkey(dateForDay(selDay)), id = ok.dataset.ok, i = +ok.dataset.i;
    const ex = PLAN[selDay].ex.find(x=>x.id===id);
    S.sessions[date] ??= {}; S.sessions[date][id] ??= [];
    const s = S.sessions[date][id][i] ??= {};
    const kgEl = document.getElementById(`kg-${id}-${i}`), rEl = document.getElementById(`r-${id}-${i}`);
    if(!s.ok){
      s.kg = kgEl.value || kgEl.placeholder.replace("kg","") || "";
      s.r = rEl.value || rEl.placeholder;
      s.ok = true; startRest(ex.desc, `${ex.nome} · série ${i+1} feita`);
    } else s.ok = false;
    save(); openEx = id; render(); return;
  }
  if(e.target.id === "cgo"){ toggleCardio(); return; }
  if(e.target.id === "creset"){ cardioRun=false; cardioElapsed=0; cardioStart=0; render(); return; }
  if(e.target.id === "cdone"){ const d = e.target.dataset.date; S.cardio[d] = {ok:!(S.cardio[d]&&S.cardio[d].ok)}; save(); render(); return; }
  if(e.target.id === "bk-copy"){ const ta = document.getElementById("bk");
    navigator.clipboard?.writeText(ta.value).then(()=>{e.target.textContent="Copiado"}).catch(()=>{ta.select();e.target.textContent="Selecionado, copie manualmente"}) ?? ta.select(); return; }
  if(e.target.id === "bk-load"){ const msg = document.getElementById("bk-msg");
    try{ const d = JSON.parse(document.getElementById("bk-in").value); if(!d.sessions) throw 0; S = Object.assign(S,d); S.alt = S.alt || {}; S.notes = S.notes || {}; S.sessions = S.sessions || {}; S.cardio = S.cardio || {}; save(); render(); }
    catch(_){ msg.textContent = "Esse texto não é um backup válido. Cole o código completo copiado do app."; } return; }
});
app.addEventListener("toggle", e => { if(e.target.matches("details.ex") && e.target.open) openEx = e.target.dataset.exid; }, true);
app.addEventListener("input", e => {
  const t = e.target;
  if(t.dataset.ex){
    const date = dkey(dateForDay(selDay));
    S.sessions[date] ??= {}; S.sessions[date][t.dataset.ex] ??= [];
    const s = S.sessions[date][t.dataset.ex][+t.dataset.i] ??= {};
    s[t.dataset.f] = t.value.replace(",", "."); save();
  }
  if(t.dataset.nota!=null && t.dataset.nota!==""){
    const date = dkey(dateForDay(selDay));
    S.notes[date] ??= {}; S.notes[date][t.dataset.nota] = t.value; save();
  }
  if(t.dataset.cfg){ const v = parseFloat(t.value.replace(",",".")); if(v>0){ S[t.dataset.cfg] = v; save(); } }
});
app.addEventListener("change", e => { if(e.target.dataset.cfg) render(); });

/* ---------- TIMER DE DESCANSO ---------- */
const tEl = document.getElementById("timer"), tClock = document.getElementById("tclock"), tLabel = document.getElementById("tlabel");
let restEnd = 0, restInt = null, actx = null;
const fmtClock = s => `${Math.floor(s/60)}:${pad(Math.max(0,Math.floor(s%60)))}`;
function beep(){ try{ actx ??= new (window.AudioContext||window.webkitAudioContext)();
  [0,0.25,0.5].forEach(t=>{ const o=actx.createOscillator(), g=actx.createGain(); o.frequency.value=880; o.connect(g); g.connect(actx.destination);
  g.gain.setValueAtTime(.2, actx.currentTime+t); g.gain.exponentialRampToValueAtTime(.001, actx.currentTime+t+.2); o.start(actx.currentTime+t); o.stop(actx.currentTime+t+.2); }); }catch(e){}
  try{ navigator.vibrate && navigator.vibrate([200,100,200]); }catch(e){} }
function startRest(sec, label){
  try{ actx ??= new (window.AudioContext||window.webkitAudioContext)(); }catch(e){}
  restEnd = Date.now() + sec*1000; tLabel.textContent = label; tEl.hidden = false;
  clearInterval(restInt); tickRest(); restInt = setInterval(tickRest, 250);
}
function tickRest(){ const left = Math.ceil((restEnd - Date.now())/1000);
  if(left <= 0){ clearInterval(restInt); tClock.textContent = "0:00"; tLabel.textContent = "Bora, próxima série!"; beep(); setTimeout(()=>{ if(Date.now()>=restEnd) tEl.hidden = true; }, 4000); return; }
  tClock.textContent = fmtClock(left); }
document.getElementById("tadd").onclick = () => { restEnd += 15000; tickRest(); };
document.getElementById("tstop").onclick = () => { clearInterval(restInt); tEl.hidden = true; };

/* ---------- TIMER DE CARDIO ---------- */
let cardioRun = false, cardioStart = 0, cardioElapsed = 0, cardioInt = null, wake = null;
const cardioTotal = () => S.cardioMin*60;
const cardioSpent = () => cardioElapsed + (cardioRun ? (Date.now()-cardioStart)/1000 : 0);
const cardioLeft = () => Math.max(0, cardioTotal() - cardioSpent());
const cardioPct = () => Math.min(100, cardioSpent()/cardioTotal()*100);
async function toggleCardio(){
  try{ actx ??= new (window.AudioContext||window.webkitAudioContext)(); }catch(e){}
  if(cardioRun){ cardioElapsed = cardioSpent(); cardioRun = false; clearInterval(cardioInt); try{ wake && wake.release(); }catch(e){} }
  else { cardioStart = Date.now(); cardioRun = true; cardioInt = setInterval(tickCardio, 500); try{ wake = await navigator.wakeLock?.request("screen"); }catch(e){} }
  const b = document.getElementById("cgo"); if(b) b.textContent = cardioRun ? "Pausar" : "Iniciar";
}
function tickCardio(){
  const c = document.getElementById("cclock"), bar = document.getElementById("cbar");
  if(c) c.textContent = fmtClock(cardioLeft()); if(bar) bar.style.width = cardioPct()+"%";
  if(cardioLeft() <= 0){ cardioRun = false; clearInterval(cardioInt); cardioElapsed = cardioTotal(); beep();
    const d = dkey(dateForDay(selDay)); if(PLAN[selDay]){ S.cardio[d] = {ok:true}; save(); } render(); }
}

const PLAN_NAME = id => (Object.values(PLAN).flatMap(p=>p.ex).find(e=>e.id===id)||{}).nome||"";
render();
if(location.search.includes("qa")) window.__qa = { P, EXP, drawPose };
if("serviceWorker" in navigator){ addEventListener("load", () => navigator.serviceWorker.register("/sw.js").catch(()=>{})); }
