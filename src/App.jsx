import { useState } from "react";

const C = {
  bg:      "#0A0F1E",
  card:    "#1A2235",
  border:  "rgba(255,255,255,0.07)",
  amber:   "#F59E0B",
  amberDim:"rgba(245,158,11,0.12)",
  blue:    "#3B82F6",
  blueDim: "rgba(59,130,246,0.12)",
  green:   "#10B981",
  red:     "#EF4444",
  purple:  "#8B5CF6",
  purpDim: "rgba(139,92,246,0.12)",
  muted:   "#64748B",
  sub:     "#94A3B8",
  text:    "#F1F5F9",
};

const PLANS = {
  atlanta:{
    id:"atlanta",name:"Atlanta",flag:"🇺🇸",tagline:"Strength + Diet Phase",
    ac:C.amber,dim:C.amberDim,
    stats:[
      {l:"Calories",v:"1,750",u:"kcal / day"},
      {l:"Protein", v:"140–150",u:"g / day"},
      {l:"Steps",   v:"7,000+",u:"/ day"},
      {l:"Gym",     v:"3×",u:"/ week"},
      {l:"Deficit", v:"~507",u:"kcal / day"},
      {l:"Sleep",   v:"8 hrs",u:"10PM → 6AM"},
    ],
    calc:[
      {l:"BMR (Mifflin-St Jeor)",v:"1,557 kcal"},
      {l:"Activity (1.45×)",     v:"~2,257 kcal"},
      {l:"Deficit",              v:"~507 kcal"},
      {l:"Target Calories",      v:"1,750 kcal",highlight:true},
    ],
    schedule:[
      {d:"MON",type:"strength",a:"Push — Chest / Shoulders / Triceps",n:"Compound pressing. Morning walk optional."},
      {d:"TUE",type:"walk",    a:"Active Recovery",                    n:"8,000 steps. No gym."},
      {d:"WED",type:"strength",a:"Pull — Back / Biceps",              n:"Row-focused. Morning walk optional."},
      {d:"THU",type:"walk",    a:"Active Recovery",                    n:"8,000 steps. Protein hits today."},
      {d:"FRI",type:"strength",a:"Lower Body — Legs / Core",          n:"Most important session. Do not skip."},
      {d:"SAT",type:"walk",    a:"Long Walk",                          n:"10,000+ steps, casual pace."},
      {d:"SUN",type:"rest",    a:"Full Rest",                          n:"Gentle walk if desired."},
    ],
    meals:[
      {m:"Breakfast", t:"6:30 AM", k:"370",p:"30g",e:"3 eggs + 1 keto slice + 200g Greek yogurt + 150g berries",v:"100g sautéed spinach"},
      {m:"Lunch",     t:"12:30 PM",k:"560",p:"47g",e:"200g chicken + 1 Carb Balance tortilla + 200g mixed salad",v:"150g roasted courgette + peppers"},
      {m:"Snack 1",   t:"3:30 PM", k:"130",p:"18g",e:"200g Greek yogurt",v:"1 medium apple"},
      {m:"Snack 2",   t:"5:30 PM", k:"90", p:"6g", e:"30g roasted chana",v:"80g carrot sticks"},
      {m:"Dinner",    t:"7:30 PM", k:"480",p:"35g",e:"150g chicken + 1 keto slice + 150ml dal",v:"100g sabzi + side salad"},
      {m:"Last snack",t:"9:00 PM", k:"120",p:"18g",e:"200g Greek yogurt — KITCHEN CLOSES",v:"— Brush teeth after"},
    ],
    rules:[
      {n:"01",r:"Hit 140g protein every day",       d:"Gym recovery requires protein. Miss this and you are wasting your sessions."},
      {n:"02",r:"Stay at or below 1,750 kcal",      d:"Log everything in MacroFactor. Oil, chai, fruit — all of it."},
      {n:"03",r:"3 strength sessions every week",   d:"Primary fat-loss lever in Atlanta. Walking burns calories. Strength reshapes the body."},
      {n:"04",r:"Max 2 bread units per meal",       d:"1 tortilla OR 2 keto slices. Hard ceiling — not a guideline."},
      {n:"05",r:"Every meal has a vegetable",       d:"Volume + fiber = satiety on a deficit. Without this, hunger wins by 4PM."},
      {n:"06",r:"Fruit every day",                  d:"Berries into morning yogurt. Apple with Snack 1. Simple and non-negotiable."},
      {n:"07",r:"Kitchen closes 9PM. Bed by 10PM.", d:"The 2AM eating habit is a deficit killer. Sleep is the structural fix."},
    ],
  },
  uk:{
    id:"uk",name:"UK",flag:"🇬🇧",tagline:"Diet + Walking Phase",
    ac:C.blue,dim:C.blueDim,
    stats:[
      {l:"Calories",v:"1,650",u:"kcal / day"},
      {l:"Protein", v:"130–140",u:"g / day"},
      {l:"Steps",   v:"8,000+",u:"/ day"},
      {l:"Training",v:"Walking",u:"only"},
      {l:"Deficit", v:"~491",u:"kcal / day"},
      {l:"Sleep",   v:"8 hrs",u:"10PM → 6AM"},
    ],
    calc:[
      {l:"BMR (Mifflin-St Jeor)",v:"1,557 kcal"},
      {l:"Activity (1.375×)",    v:"~2,141 kcal"},
      {l:"Deficit",              v:"~491 kcal"},
      {l:"Target Calories",      v:"1,650 kcal",highlight:true},
    ],
    schedule:[
      {d:"MON",type:"walk",   a:"Morning + Evening Walk",   n:"10,000 steps total. Split if needed."},
      {d:"TUE",type:"walk",   a:"Morning Walk",             n:"8,000 steps minimum."},
      {d:"WED",type:"walk",   a:"Morning + Evening Walk",   n:"Explore neighborhood routes."},
      {d:"THU",type:"walk",   a:"Morning Walk",             n:"8,000 steps minimum."},
      {d:"FRI",type:"walk",   a:"Morning + Evening Walk",   n:"10,000 steps target."},
      {d:"SAT",type:"walk",   a:"Long Walk",                n:"Lightest dinner tonight — Sunday follows."},
      {d:"SUN",type:"special",a:"Sangat + Post-Langar Walk",n:"20–30 min walk immediately after langar."},
    ],
    meals:[
      {m:"Breakfast", t:"6:30 AM", k:"370",p:"28g",e:"3 eggs + 1 keto slice + 200g Greek yogurt + 150g berries",v:"100g sautéed spinach"},
      {m:"Lunch",     t:"12:30 PM",k:"575",p:"46g",e:"200g chicken + 1 tortilla or 2 keto slices + 200g salad",v:"150g sabzi (rotate daily)"},
      {m:"Snack 1",   t:"3:30 PM", k:"125",p:"15g",e:"200g Greek yogurt",v:"1 apple or pear"},
      {m:"Snack 2",   t:"5:30 PM", k:"90", p:"6g", e:"30g roasted chana",v:"80g carrot or celery sticks"},
      {m:"Dinner",    t:"7:30 PM", k:"430",p:"32g",e:"150g chicken + 1 keto slice + 150ml dal",v:"100g sabzi + side salad"},
      {m:"Last snack",t:"9:00 PM", k:"120",p:"18g",e:"200g Greek yogurt — KITCHEN CLOSES",v:"— Brush teeth after"},
    ],
    rules:[
      {n:"01",r:"130g protein every day",              d:"No gym = protein is your only protection against muscle loss."},
      {n:"02",r:"Stay at or below 1,650 kcal",         d:"Tighter than Atlanta — no gym to raise TDEE. Log everything in MacroFactor."},
      {n:"03",r:"8,000 steps every single day",        d:"This is your only active calorie burn for the month. Rain is not an excuse."},
      {n:"04",r:"Max 2 bread units per meal",          d:"1 tortilla OR 2 keto slices (UK: 2 rotis if family home). Never 3."},
      {n:"05",r:"Every meal has a vegetable",          d:"Fill half your plate with vegetables at every meal. Non-negotiable."},
      {n:"06",r:"Fruit every day",                     d:"Berries into morning yogurt. Apple or pear with afternoon snack."},
      {n:"07",r:"1 kadha prasad only. Kitchen closes 9PM.",d:"Prasad: one tablespoon, slowly. Dhan Nirankar Ji. Move on."},
    ],
    sunday:[
      {t:"6:00 AM",  ph:"Wake",            a:"8 hrs complete. Do not lie in. Discipline starts here.",                   icon:"☀️",type:"wake"},
      {t:"6:30 AM",  ph:"Breakfast",       a:"3 eggs + 1 keto slice + 200g Greek yogurt + spinach. Before leaving.",     icon:"🍳",type:"eat"},
      {t:"7:30 AM",  ph:"Travel",          a:"Walk if possible. 15 min each way = 3,000 steps toward daily target.",     icon:"🚶",type:"walk"},
      {t:"~10:00 AM",ph:"Langar",          a:"Dal → sabzi (half plate) → max 2 rotis → skip/minimal rice → NO seconds", icon:"🙏",type:"spiritual"},
      {t:"Prasad",   ph:"Kadha Prasad",    a:"1 tablespoon. Eat slowly. Dhan Nirankar Ji. One portion is complete.",     icon:"✋",type:"spiritual"},
      {t:"~11:30 AM",ph:"Post-Langar Walk",a:"20–30 min immediately after. Blunts the blood sugar spike.",               icon:"🚶",type:"walk"},
      {t:"2:00 PM",  ph:"Afternoon",       a:"Water toward 3L. 150g Greek yogurt + 1 apple if genuinely hungry.",        icon:"💧",type:"rest"},
      {t:"7:30 PM",  ph:"Dinner",          a:"2–3 eggs OR 75g paneer + 1 keto slice + dal + sabzi. No rice.",            icon:"🍽️",type:"eat"},
      {t:"9:00 PM",  ph:"Last Snack",      a:"Whey shake if under 120g protein. KITCHEN CLOSES. Brush teeth.",           icon:"🥛",type:"eat"},
      {t:"9:30 PM",  ph:"Wind Down",       a:"Phone down. No screens. Begin sleep prep.",                                 icon:"📵",type:"rest"},
      {t:"10:00 PM", ph:"Sleep",           a:"Lights out. Controlled Sunday complete. Monday 6AM resumes.",               icon:"🌙",type:"sleep"},
    ],
  },
};

const CHECKS_UK = [
  {id:"protein", label:"130g+ protein hit"},
  {id:"calories",label:"Under 1,650 kcal"},
  {id:"steps",   label:"8,000+ steps walked"},
  {id:"sleep",   label:"Bed by 10PM"},
  {id:"kitchen", label:"Kitchen closed by 9PM"},
  {id:"veg",     label:"Veg at every meal"},
  {id:"fruit",   label:"Fruit eaten today"},
];
const CHECKS_ATL = [
  {id:"protein", label:"140g+ protein hit"},
  {id:"calories",label:"Under 1,750 kcal"},
  {id:"steps",   label:"7,000+ steps / gym done"},
  {id:"sleep",   label:"Bed by 10PM"},
  {id:"kitchen", label:"Kitchen closed by 9PM"},
  {id:"veg",     label:"Veg at every meal"},
  {id:"fruit",   label:"Fruit eaten today"},
];

const NIGHT_FIXES = [
  {n:"1",fix:"Bed at 10PM every night",    how:"If asleep, you cannot eat. The only perfect solution.",               impact:"CRITICAL"},
  {n:"2",fix:"Kitchen closes at 9PM",      how:"Eat by 9PM. Brush teeth immediately after. Behavioral off-switch.",   impact:"CRITICAL"},
  {n:"3",fix:"Front-load your calories",   how:"Dinner hits 400–450 kcal. 200g Greek yogurt at 9PM kills hunger.",    impact:"HIGH"},
  {n:"4",fix:"Remove junk from the house", how:"If it is not there, you cannot eat it at 2AM. Atlanta only.",         impact:"HIGH"},
  {n:"5",fix:"Stock rescue foods",         how:"Greek yogurt, boiled eggs, or whey shake. Keep in fridge always.",    impact:"MEDIUM"},
];

const RESCUE = [
  {o:"200g Greek yogurt",         k:"120 kcal",p:"18–20g",verdict:"✅ Best first choice"},
  {o:"2 boiled eggs (pre-boiled)",k:"140 kcal",p:"12g",   verdict:"✅ Good option"},
  {o:"Whey shake in water",       k:"120 kcal",p:"25g",   verdict:"✅ Best protein/kcal"},
  {o:"Junk food (current habit)", k:"400–800 kcal",p:"2–5g",verdict:"❌ Kills deficit"},
];

const TYPE_STYLE = {
  strength:{bg:"rgba(245,158,11,0.12)",color:"#FCD34D",label:"STRENGTH"},
  walk:    {bg:"rgba(59,130,246,0.12)", color:"#93C5FD",label:"WALK"},
  rest:    {bg:"rgba(148,163,184,0.08)",color:"#94A3B8",label:"REST"},
  special: {bg:"rgba(139,92,246,0.12)", color:"#C4B5FD",label:"SANGAT"},
};
const SUN_STYLE = {
  wake:{color:"#FCD34D"},eat:{color:"#6EE7B7"},walk:{color:"#93C5FD"},
  spiritual:{color:"#C4B5FD"},rest:{color:"#94A3B8"},sleep:{color:"#FDA4AF"},
};
const IMPACT_STYLE = {
  CRITICAL:{bg:"rgba(239,68,68,0.12)",  color:"#EF4444"},
  HIGH:    {bg:"rgba(245,158,11,0.12)", color:"#F59E0B"},
  MEDIUM:  {bg:"rgba(59,130,246,0.12)", color:"#93C5FD"},
};
const DOT_COLOR = {full:C.green,partial:C.amber,miss:"rgba(255,255,255,0.07)"};

function todayKey(){ return new Date().toISOString().slice(0,10); }
function formatDate(k){
  const d=new Date(k+"T12:00:00");
  return d.toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short",year:"numeric"});
}
function isToday(k){ return k===todayKey(); }

function ls(key,fb){ try{ const v=localStorage.getItem(key); return v?JSON.parse(v):fb; }catch{ return fb; } }
function lsSet(key,val){ try{ localStorage.setItem(key,JSON.stringify(val)); }catch{} }

function Tag({label,color,bg}){
  return <span style={{fontSize:"9px",fontWeight:800,color,background:bg||color+"22",padding:"2px 7px",borderRadius:"4px",letterSpacing:"0.08em"}}>{label}</span>;
}

// ─────────────────────────────────────────────────────────────────────────────
// DATE PICKER — lets user browse past 30 days
// ─────────────────────────────────────────────────────────────────────────────
function DatePicker({selected,onChange}){
  const days=[];
  for(let i=0;i<30;i++){
    const d=new Date(); d.setDate(d.getDate()-i);
    days.push(d.toISOString().slice(0,10));
  }
  return(
    <div style={{marginBottom:"14px"}}>
      <div style={{fontSize:"10px",color:C.muted,letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:700,marginBottom:"8px"}}>
        Select day to edit
      </div>
      <select
        value={selected}
        onChange={e=>onChange(e.target.value)}
        style={{width:"100%",padding:"10px 12px",borderRadius:"10px",
          border:`1px solid ${C.border}`,background:C.card,color:C.text,
          fontSize:"13px",fontFamily:"inherit",outline:"none",cursor:"pointer"}}>
        {days.map(d=>(
          <option key={d} value={d}>
            {isToday(d)?"Today — ":""}{formatDate(d)}
          </option>
        ))}
      </select>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TRACKER
// ─────────────────────────────────────────────────────────────────────────────
function Tracker({planPhase}){
  const [phase,  setPhaseState] = useState(()=>ls("rl_phase",planPhase||"uk"));
  const [checks, setChecks]     = useState(()=>ls("rl_checks",{}));
  const [history,setHistory]    = useState(()=>ls("rl_history",[]));
  const [weights,setWeights]    = useState(()=>ls("rl_weights",[]));
  const [tab,    setTab]        = useState("checkin");
  const [selDate,setSelDate]    = useState(todayKey());
  const [wIn,    setWIn]        = useState("");
  const [savedMsg,setSavedMsg]  = useState("");
  const [wMsg,   setWMsg]       = useState("");

  const checkList   = phase==="uk"?CHECKS_UK:CHECKS_ATL;
  const selChecks   = checks[selDate]||{};
  const doneSelDay  = checkList.filter(c=>selChecks[c.id]).length;
  const isPast      = selDate<todayKey();
  const isFuture    = selDate>todayKey();

  const save=(key,val,setter)=>{ setter(val); lsSet(key,val); };

  function setPhase(p){ setPhaseState(p); lsSet("rl_phase",p); setSavedMsg(""); }

  function toggleCheck(id){
    if(isFuture) return;
    const next={...checks,[selDate]:{...checks[selDate],[id]:!checks[selDate]?.[id]}};
    save("rl_checks",next,setChecks);
    setSavedMsg("");
  }

  function saveCheckin(){
    if(isFuture) return;
    const done=doneSelDay, total=checkList.length;
    const next=[...history.filter(h=>h.date!==selDate),{date:selDate,done,total,phase}];
    save("rl_history",next,setHistory);
    const pct=Math.round(done/total*100);
    const prefix=isPast?`Saved for ${formatDate(selDate)}: `:"";
    if(done===total)  setSavedMsg(prefix+"Perfect day. Every target hit.");
    else if(pct>=70)  setSavedMsg(`${prefix}${done}/${total} hit. Solid. Fix the remaining ${total-done} next time.`);
    else if(pct>=40)  setSavedMsg(`${prefix}${done}/${total} hit. Below target. Identify what failed.`);
    else setSavedMsg(`${prefix}${done}/${total} hit. Difficult day. Reset — kitchen 9PM, bed 10PM.`);
  }

  function logWeight(){
    const val=parseFloat(wIn);
    if(isNaN(val)||val<80||val>350){ setWMsg("Enter a valid weight."); return; }
    const next=[...weights.filter(w=>w.date!==selDate),{date:selDate,w:val}]
      .sort((a,b)=>a.date.localeCompare(b.date));
    save("rl_weights",next,setWeights);
    setWIn(""); setWMsg(`Logged ${val} lb for ${isToday(selDate)?"today":formatDate(selDate)}. Weigh once per week only.`);
  }

  function getStreak(){
    let s=0;
    for(let i=0;i<90;i++){
      const d=new Date(); d.setDate(d.getDate()-i);
      const k=d.toISOString().slice(0,10);
      const e=history.find(h=>h.date===k);
      if(e&&e.done>=Math.ceil(e.total*0.5)) s++; else break;
    }
    return s;
  }

  function getWeekScore(){
    let c=0;
    for(let i=0;i<7;i++){
      const d=new Date(); d.setDate(d.getDate()-i);
      const k=d.toISOString().slice(0,10);
      const e=history.find(h=>h.date===k);
      if(e&&e.done>=Math.ceil(e.total*0.7)) c++;
    }
    return c;
  }

  function getDots(){
    return Array.from({length:28},(_,i)=>{
      const d=new Date(); d.setDate(d.getDate()-(27-i));
      const k=d.toISOString().slice(0,10);
      const e=history.find(h=>h.date===k);
      const isSelected=k===selDate;
      if(!e) return {key:k,type:"miss",isSelected};
      const pct=e.done/e.total;
      return {key:k,type:pct>=0.85?"full":pct>=0.5?"partial":"miss",isSelected};
    });
  }

  const sortedW=[...weights].sort((a,b)=>a.date.localeCompare(b.date));
  const firstW=sortedW[0], lastW=sortedW[sortedW.length-1];

  const sec={background:C.card,border:`1px solid ${C.border}`,borderRadius:"12px",padding:"16px",marginBottom:"12px"};
  const tabBtn=(active)=>({
    padding:"6px 14px",borderRadius:"8px",fontSize:"12px",cursor:"pointer",fontFamily:"inherit",
    border:`1px solid ${active?C.blue:C.border}`,background:active?"rgba(59,130,246,0.12)":"transparent",
    color:active?"#93C5FD":C.muted,fontWeight:active?700:400,transition:"all 0.15s",
  });
  const phTag=(p,active)=>({
    padding:"3px 10px",borderRadius:"6px",fontSize:"11px",fontWeight:700,cursor:"pointer",fontFamily:"inherit",
    border:`1px solid ${active?(p==="uk"?C.blue:C.amber):C.border}`,
    background:active?(p==="uk"?"rgba(59,130,246,0.15)":"rgba(245,158,11,0.15)"):"transparent",
    color:active?(p==="uk"?"#93C5FD":"#FCD34D"):C.muted,opacity:active?1:0.5,
  });
  const chkStyle=(done)=>({
    display:"flex",alignItems:"center",gap:"10px",padding:"10px 12px",borderRadius:"10px",cursor:"pointer",
    border:`1.5px solid ${done?C.green+"55":C.border}`,
    background:done?C.green+"11":"rgba(255,255,255,0.02)",transition:"all 0.15s",
  });

  const selectedDayLabel = isToday(selDate)
    ? "Today"
    : isPast
    ? `Editing: ${formatDate(selDate)}`
    : formatDate(selDate);

  return(
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"14px"}}>
        <div>
          <div style={{fontSize:"18px",fontWeight:800,letterSpacing:"-0.5px"}}>Daily accountability</div>
          <div style={{fontSize:"11px",color:C.muted,marginTop:"4px"}}>
            {new Date().toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long"})}
          </div>
        </div>
        <div style={{display:"flex",gap:"6px"}}>
          <button style={phTag("uk",phase==="uk")}   onClick={()=>setPhase("uk")}>UK</button>
          <button style={phTag("atl",phase==="atl")} onClick={()=>setPhase("atl")}>ATL</button>
        </div>
      </div>

      <div style={{display:"flex",gap:"6px",marginBottom:"16px",overflowX:"auto"}}>
        {["checkin","weight","history"].map(t=>(
          <button key={t} style={tabBtn(tab===t)} onClick={()=>{ setTab(t); setSavedMsg(""); setWMsg(""); }}>
            {t==="checkin"?"Check-in":t==="weight"?"Weight log":"History"}
          </button>
        ))}
      </div>

      {/* ── CHECK-IN TAB ── */}
      {tab==="checkin"&&(
        <div>
          {/* Stats */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"8px",marginBottom:"14px"}}>
            {[{l:"Day streak",v:getStreak()},{l:"This week",v:`${getWeekScore()}/7`},{l:"Total days",v:history.length}].map((s,i)=>(
              <div key={i} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:"12px",padding:"12px",textAlign:"center"}}>
                <div style={{fontSize:"22px",fontWeight:800,color:C.blue,fontFamily:"'DM Mono',monospace"}}>{s.v}</div>
                <div style={{fontSize:"10px",color:C.muted,marginTop:"3px"}}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Date picker */}
          <DatePicker selected={selDate} onChange={(d)=>{ setSelDate(d); setSavedMsg(""); }}/>

          {/* Check-in card */}
          <div style={sec}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px",flexWrap:"wrap",gap:"6px"}}>
              <div style={{fontSize:"13px",fontWeight:700,color:isPast?C.amber:C.text}}>
                {selectedDayLabel}
              </div>
              {isPast&&(
                <span style={{fontSize:"10px",padding:"2px 8px",borderRadius:"5px",fontWeight:700,
                  background:"rgba(245,158,11,0.15)",color:"#FCD34D"}}>
                  Editing past day
                </span>
              )}
            </div>

            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"}}>
              {checkList.map(c=>(
                <div key={c.id} style={chkStyle(!!selChecks[c.id])} onClick={()=>toggleCheck(c.id)}>
                  <div style={{width:"20px",height:"20px",borderRadius:"6px",flexShrink:0,
                    border:`1.5px solid ${selChecks[c.id]?C.green:C.border}`,
                    background:selChecks[c.id]?C.green+"22":"transparent",
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:"11px",color:C.green}}>
                    {selChecks[c.id]?"✓":""}
                  </div>
                  <span style={{fontSize:"12px",lineHeight:1.35,color:selChecks[c.id]?C.green:C.sub}}>
                    {c.label}
                  </span>
                </div>
              ))}
            </div>

            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"12px"}}>
              <span style={{fontSize:"12px",color:C.muted}}>{doneSelDay} of {checkList.length} done</span>
              <button onClick={saveCheckin} style={{padding:"8px 16px",borderRadius:"8px",fontSize:"12px",
                fontWeight:700,cursor:"pointer",fontFamily:"inherit",
                background:isPast?"rgba(245,158,11,0.15)":"rgba(59,130,246,0.15)",
                border:`1px solid ${isPast?C.amber+"55":C.blue+"55"}`,
                color:isPast?"#FCD34D":"#93C5FD"}}>
                {isPast?"Save past day":"Save today"}
              </button>
            </div>
            {savedMsg&&(
              <div style={{marginTop:"10px",background:"rgba(255,255,255,0.04)",borderRadius:"8px",
                padding:"10px 12px",fontSize:"12px",color:C.sub,lineHeight:1.6}}>{savedMsg}</div>
            )}
          </div>

          {/* Dot grid — click a dot to jump to that day */}
          <div style={{...sec,padding:"12px 16px"}}>
            <div style={{fontSize:"10px",color:C.muted,letterSpacing:"0.1em",textTransform:"uppercase",
              fontWeight:700,marginBottom:"8px"}}>Last 28 days — tap a dot to edit that day</div>
            <div style={{display:"flex",gap:"4px",flexWrap:"wrap"}}>
              {getDots().map((dot,i)=>(
                <div key={i} title={dot.key} onClick={()=>{ setSelDate(dot.key); setSavedMsg(""); }}
                  style={{width:"16px",height:"16px",borderRadius:"4px",cursor:"pointer",
                    background:DOT_COLOR[dot.type],
                    border:`2px solid ${dot.isSelected?"#F1F5F9":dot.type==="full"?C.green+"55":dot.type==="partial"?C.amber+"55":"rgba(255,255,255,0.1)"}`,
                    transform:dot.isSelected?"scale(1.25)":"scale(1)",transition:"all 0.12s"}}/>
              ))}
            </div>
            <div style={{display:"flex",gap:"12px",marginTop:"8px"}}>
              {[["full",C.green,"Full"],["partial",C.amber,"Partial"],["miss",C.muted,"Missed"]].map(([t,c,l])=>(
                <span key={t} style={{fontSize:"11px",color:C.muted,display:"flex",alignItems:"center",gap:"4px"}}>
                  <span style={{width:"10px",height:"10px",borderRadius:"2px",background:DOT_COLOR[t],display:"inline-block"}}/>
                  {l}
                </span>
              ))}
            </div>
            <div style={{marginTop:"6px",fontSize:"11px",color:C.muted}}>
              Selected: <span style={{color:C.text,fontWeight:600}}>{isToday(selDate)?"Today":formatDate(selDate)}</span>
            </div>
          </div>
        </div>
      )}

      {/* ── WEIGHT TAB ── */}
      {tab==="weight"&&(
        <div>
          <DatePicker selected={selDate} onChange={(d)=>{ setSelDate(d); setWMsg(""); }}/>
          <div style={sec}>
            <div style={{fontSize:"13px",fontWeight:700,marginBottom:"6px"}}>
              Log weight for {isToday(selDate)?"today":formatDate(selDate)}
            </div>
            <div style={{fontSize:"11px",color:C.muted,marginBottom:"10px"}}>
              {isToday(selDate)?"After bathroom, before eating — once per week only":"Backfilling a past weigh-in"}
            </div>
            <div style={{display:"flex",gap:"8px"}}>
              <input type="number" placeholder="e.g. 159.2" step="0.1" value={wIn}
                onChange={e=>setWIn(e.target.value)}
                style={{flex:1,padding:"8px 12px",borderRadius:"8px",
                  border:`1px solid ${C.border}`,background:"rgba(255,255,255,0.05)",
                  color:C.text,fontSize:"14px",fontFamily:"'DM Mono',monospace",outline:"none"}}/>
              <button onClick={logWeight} style={{padding:"8px 16px",borderRadius:"8px",fontSize:"12px",
                fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0,
                background:"rgba(59,130,246,0.15)",border:`1px solid ${C.blue}55`,color:"#93C5FD"}}>
                Log
              </button>
            </div>
            {wMsg&&<div style={{marginTop:"10px",background:"rgba(255,255,255,0.04)",borderRadius:"8px",
              padding:"10px 12px",fontSize:"12px",color:C.sub}}>{wMsg}</div>}
          </div>

          {sortedW.length>0&&(
            <div style={sec}>
              <div style={{fontSize:"13px",fontWeight:700,marginBottom:"12px"}}>Weight history</div>
              <div style={{display:"flex",gap:"20px",marginBottom:"14px",flexWrap:"wrap"}}>
                {[
                  {l:"Starting",v:`${firstW.w} lb`},
                  {l:"Current", v:`${lastW.w} lb`},
                  {l:"Change",  v:`${lastW.w-firstW.w>0?"+":""}${(lastW.w-firstW.w).toFixed(1)} lb`},
                  {l:"Target",  v:"144–148 lb"},
                ].map((s,i)=>(
                  <div key={i}>
                    <div style={{fontSize:"10px",color:C.muted}}>{s.l}</div>
                    <div style={{fontSize:"16px",fontWeight:700,fontFamily:"'DM Mono',monospace",
                      color:i===2?(lastW.w<firstW.w?C.green:C.red):C.text}}>{s.v}</div>
                  </div>
                ))}
              </div>
              {[...sortedW].reverse().slice(0,14).map((w,i)=>(
                <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",
                  padding:"8px 0",borderBottom:`1px solid ${C.border}`,fontSize:"13px"}}>
                  <span style={{color:w.date===todayKey()?C.text:C.muted}}>
                    {isToday(w.date)?"Today":formatDate(w.date)}
                  </span>
                  <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                    <span style={{fontFamily:"'DM Mono',monospace",fontWeight:700}}>{w.w} lb</span>
                    <button onClick={()=>{
                      if(window.confirm(`Delete entry for ${formatDate(w.date)}?`)){
                        const next=weights.filter(x=>x.date!==w.date);
                        save("rl_weights",next,setWeights);
                      }
                    }} style={{fontSize:"10px",color:C.red,background:"transparent",
                      border:`1px solid ${C.red}44`,borderRadius:"4px",padding:"2px 6px",cursor:"pointer"}}>
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── HISTORY TAB ── */}
      {tab==="history"&&(
        <div>
          <div style={sec}>
            <div style={{fontSize:"13px",fontWeight:700,marginBottom:"12px"}}>Check-in log</div>
            {history.length===0
              ?<div style={{fontSize:"13px",color:C.muted}}>No check-ins saved yet.</div>
              :[...history].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,30).map((h,i)=>{
                const pct=Math.round(h.done/h.total*100);
                const bc=pct>=85?C.green:pct>=50?C.amber:C.red;
                return(
                  <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",
                    padding:"9px 0",borderBottom:`1px solid ${C.border}`,fontSize:"13px"}}>
                    <div style={{display:"flex",alignItems:"center",gap:"8px",flex:1,minWidth:0}}>
                      <span style={{color:isToday(h.date)?C.text:C.muted,fontSize:"12px"}}>
                        {isToday(h.date)?"Today":formatDate(h.date)}
                      </span>
                      <span style={{fontSize:"10px",padding:"2px 6px",borderRadius:"4px",fontWeight:700,flexShrink:0,
                        background:h.phase==="uk"?"rgba(59,130,246,0.15)":"rgba(245,158,11,0.15)",
                        color:h.phase==="uk"?"#93C5FD":"#FCD34D"}}>{h.phase==="uk"?"UK":"ATL"}</span>
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:"8px",flexShrink:0}}>
                      <span style={{fontSize:"12px",fontWeight:700,padding:"2px 8px",borderRadius:"6px",
                        background:bc+"22",color:bc}}>{h.done}/{h.total}</span>
                      <button onClick={()=>{
                        setTab("checkin");
                        setSelDate(h.date);
                        setSavedMsg("");
                      }} style={{fontSize:"10px",color:C.blue,background:"transparent",
                        border:`1px solid ${C.blue}44`,borderRadius:"4px",padding:"2px 7px",cursor:"pointer"}}>
                        Edit
                      </button>
                    </div>
                  </div>
                );
              })
            }
          </div>
          <button onClick={()=>{
            if(window.confirm("Clear all check-in and weight data? This cannot be undone.")){
              save("rl_checks",{},setChecks);
              save("rl_history",[],setHistory);
              save("rl_weights",[],setWeights);
              setSavedMsg("");
            }
          }} style={{padding:"7px 14px",borderRadius:"8px",fontSize:"12px",cursor:"pointer",
            fontFamily:"inherit",background:"transparent",border:`1px solid ${C.red}55`,color:C.red}}>
            Clear all data
          </button>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN APP
// ─────────────────────────────────────────────────────────────────────────────
export default function App(){
  const [plan,   setPlan]   = useState("atlanta");
  const [section,setSection]= useState("overview");
  const [topTab, setTopTab] = useState("plan");
  const P=PLANS[plan];

  const TOP_SECTIONS=[{id:"plan",l:"Plan"},{id:"tracker",l:"📋 Tracker"}];
  const PLAN_SECTIONS=[
    {id:"overview",l:"Overview"},{id:"schedule",l:"Schedule"},
    {id:"meals",l:"Meals"},{id:"rules",l:"7 Rules"},{id:"night",l:"🌙 2AM Fix"},
    ...(plan==="uk"?[{id:"sunday",l:"Sunday"}]:[]),
  ];

  const switchPlan=(id)=>{ setPlan(id); if(id==="atlanta"&&section==="sunday") setSection("overview"); };

  const navBtn=(active,color)=>({
    padding:"6px 13px",borderRadius:"8px",fontSize:"11px",cursor:"pointer",fontFamily:"inherit",
    border:`1px solid ${active?(color||C.blue):C.border}`,
    background:active?`${color||C.blue}22`:"transparent",
    color:active?(color||"#93C5FD"):C.muted,
    fontWeight:active?700:400,whiteSpace:"nowrap",transition:"all 0.15s",
  });

  return(
    <div style={{fontFamily:"'DM Sans','Segoe UI',sans-serif",background:C.bg,minHeight:"100vh",color:C.text}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500;700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:3px;height:3px;}
        ::-webkit-scrollbar-track{background:#111827;}
        ::-webkit-scrollbar-thumb{background:#334155;border-radius:2px;}
        button{font-family:inherit;cursor:pointer;border:none;background:none;}
        select option{background:#1A2235;color:#F1F5F9;}
      `}</style>

      <div style={{padding:"22px 18px 14px",borderBottom:`1px solid ${C.border}`,
        background:"linear-gradient(180deg,#0F172A 0%,#0A0F1E 100%)"}}>
        <div style={{fontSize:"9px",letterSpacing:"0.2em",color:C.muted,fontWeight:700,textTransform:"uppercase",marginBottom:"6px"}}>
          Fat Loss Plan · Rahul Singh · v2
        </div>
        <div style={{fontSize:"22px",fontWeight:800,letterSpacing:"-0.5px",lineHeight:1.15}}>Two-Phase Roadmap</div>
        <div style={{fontSize:"11px",color:C.muted,marginTop:"5px"}}>
          Age 38 · 5′4″ · 160 lb · Kitchen closes 9PM · Lights out 10PM
        </div>
      </div>

      <div style={{padding:"14px 18px 0"}}>
        <div style={{display:"flex",gap:"6px",marginBottom:"14px"}}>
          {TOP_SECTIONS.map(s=>(
            <button key={s.id} style={navBtn(topTab===s.id,C.blue)} onClick={()=>setTopTab(s.id)}>{s.l}</button>
          ))}
        </div>
      </div>

      <div style={{padding:"0 18px 56px"}}>

        {topTab==="plan"&&(
          <div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",marginBottom:"14px"}}>
              {Object.values(PLANS).map(p=>{
                const active=plan===p.id;
                return(
                  <button key={p.id} onClick={()=>switchPlan(p.id)}
                    style={{background:active?p.dim:"rgba(255,255,255,0.02)",
                      border:`1.5px solid ${active?p.ac:C.border}`,
                      borderRadius:"12px",padding:"13px 14px",textAlign:"left",transition:"all 0.18s"}}>
                    <div style={{fontSize:"18px",marginBottom:"4px"}}>{p.flag}</div>
                    <div style={{fontSize:"13px",fontWeight:700,color:active?p.ac:C.sub}}>{p.name}</div>
                    <div style={{fontSize:"11px",color:active?p.ac+"BB":C.muted,marginTop:"2px"}}>{p.tagline}</div>
                  </button>
                );
              })}
            </div>

            <div style={{display:"flex",gap:"5px",overflowX:"auto",paddingBottom:"12px"}}>
              {PLAN_SECTIONS.map(s=>(
                <button key={s.id} style={navBtn(section===s.id,P.ac)} onClick={()=>setSection(s.id)}>{s.l}</button>
              ))}
            </div>

            {section==="overview"&&(
              <div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginBottom:"14px"}}>
                  {P.stats.map((s,i)=>(
                    <div key={i} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:"12px",padding:"12px"}}>
                      <div style={{fontSize:"9px",color:C.muted,letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:700,marginBottom:"6px"}}>{s.l}</div>
                      <div style={{fontSize:"20px",fontWeight:800,color:P.ac,fontFamily:"'DM Mono',monospace",lineHeight:1}}>{s.v}</div>
                      <div style={{fontSize:"10px",color:C.muted,marginTop:"3px"}}>{s.u}</div>
                    </div>
                  ))}
                </div>
                <div style={{background:C.card,border:`1px solid ${P.dim}`,borderRadius:"12px",padding:"15px",marginBottom:"10px"}}>
                  <div style={{fontSize:"9px",color:C.muted,letterSpacing:"0.14em",textTransform:"uppercase",fontWeight:700,marginBottom:"12px"}}>Calorie Calculation</div>
                  {P.calc.map((r,i)=>(
                    <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",
                      padding:"8px 10px",marginBottom:"4px",background:r.highlight?P.dim:"transparent",
                      borderRadius:r.highlight?"8px":"0",borderBottom:!r.highlight?`1px solid ${C.border}`:"none"}}>
                      <span style={{fontSize:"12px",color:r.highlight?C.text:C.sub}}>{r.l}</span>
                      <span style={{fontSize:r.highlight?"16px":"13px",fontWeight:r.highlight?800:500,
                        color:r.highlight?P.ac:C.sub,fontFamily:"'DM Mono',monospace"}}>{r.v}</span>
                    </div>
                  ))}
                </div>
                <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:"12px",padding:"15px"}}>
                  <div style={{fontSize:"9px",color:C.muted,letterSpacing:"0.14em",textTransform:"uppercase",fontWeight:700,marginBottom:"12px"}}>Weight Loss Projection</div>
                  {(plan==="uk"
                    ?[["End of UK month","3.5–5 lbs"],["By Aug 2026 (consistent)","12–16 lbs"],["Target weight","144–148 lbs"]]
                    :[["Per month (consistent)","3–4 lbs"],["By Aug 2026","12–16 lbs"],["Target weight","144–148 lbs"]]
                  ).map(([l,v],i,arr)=>(
                    <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",
                      paddingBottom:i<arr.length-1?"10px":"0",marginBottom:i<arr.length-1?"10px":"0",
                      borderBottom:i<arr.length-1?`1px solid ${C.border}`:"none"}}>
                      <span style={{fontSize:"12px",color:C.sub}}>{l}</span>
                      <span style={{fontSize:"14px",fontWeight:700,color:C.green,fontFamily:"'DM Mono',monospace"}}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section==="schedule"&&(
              <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
                {P.schedule.map((d,i)=>{
                  const ts=TYPE_STYLE[d.type];
                  return(
                    <div key={i} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:"12px",
                      padding:"12px 14px",display:"flex",alignItems:"center",gap:"12px"}}>
                      <div style={{width:"42px",height:"42px",borderRadius:"10px",background:ts.bg,
                        display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                        <span style={{fontSize:"10px",fontWeight:800,color:ts.color,fontFamily:"'DM Mono',monospace"}}>{d.d}</span>
                      </div>
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{display:"flex",alignItems:"center",gap:"7px",marginBottom:"3px",flexWrap:"wrap"}}>
                          <span style={{fontSize:"13px",fontWeight:700}}>{d.a}</span>
                          <Tag label={ts.label} color={ts.color} bg={ts.bg}/>
                        </div>
                        <div style={{fontSize:"11px",color:C.muted}}>{d.n}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {section==="meals"&&(
              <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                <div style={{background:P.dim,border:`1px solid ${P.ac}33`,borderRadius:"10px",padding:"10px 13px",fontSize:"12px",color:P.ac}}>
                  Daily: ~{plan==="atlanta"?"1,750 kcal · 140–150g protein":"1,650 kcal · 130–140g protein"} · Every meal includes vegetables · Fruit daily
                </div>
                {P.meals.map((m,i)=>{
                  const isClose=m.m.includes("Last");
                  return(
                    <div key={i} style={{background:isClose?"rgba(239,68,68,0.06)":C.card,
                      border:`1px solid ${isClose?C.red+"33":C.border}`,borderRadius:"12px",padding:"14px"}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"8px"}}>
                        <div>
                          <div style={{fontSize:"13px",fontWeight:700,color:isClose?C.red:C.text}}>{m.m}</div>
                          <div style={{fontSize:"10px",color:C.muted,marginTop:"2px",fontFamily:"'DM Mono',monospace"}}>{m.t}</div>
                        </div>
                        <div style={{textAlign:"right"}}>
                          <div style={{fontSize:"13px",fontWeight:700,color:P.ac,fontFamily:"'DM Mono',monospace"}}>{m.p}</div>
                          <div style={{fontSize:"10px",color:C.muted}}>{m.k} kcal</div>
                        </div>
                      </div>
                      <div style={{fontSize:"12px",color:C.sub,background:"rgba(255,255,255,0.025)",borderRadius:"8px",padding:"9px 11px",lineHeight:1.65,marginBottom:"6px"}}>{m.e}</div>
                      {m.v!=="— Brush teeth after"&&(
                        <div style={{display:"flex",alignItems:"center",gap:"6px"}}>
                          <span style={{fontSize:"12px",color:C.green}}>🥦</span>
                          <span style={{fontSize:"11px",color:C.green+"CC"}}>{m.v}</span>
                        </div>
                      )}
                      {isClose&&(
                        <div style={{marginTop:"6px",display:"flex",alignItems:"center",gap:"6px"}}>
                          <span style={{fontSize:"12px"}}>🪥</span>
                          <span style={{fontSize:"11px",color:C.red+"CC",fontWeight:600}}>Brush teeth immediately. Kitchen is closed.</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {section==="rules"&&(
              <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                {P.rules.map((r,i)=>{
                  const isNight=i===6;
                  return(
                    <div key={i} style={{background:isNight?"rgba(239,68,68,0.06)":C.card,
                      border:`1px solid ${isNight?C.red+"33":C.border}`,borderRadius:"12px",padding:"15px",display:"flex",gap:"13px"}}>
                      <div style={{fontSize:"20px",fontWeight:800,color:isNight?C.red:P.ac,
                        fontFamily:"'DM Mono',monospace",opacity:0.5,flexShrink:0,lineHeight:1,paddingTop:"2px"}}>{r.n}</div>
                      <div>
                        <div style={{fontSize:"13px",fontWeight:700,marginBottom:"6px",lineHeight:1.4,color:isNight?C.red:C.text}}>{r.r}</div>
                        <div style={{fontSize:"12px",color:C.muted,lineHeight:1.65}}>{r.d}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {section==="night"&&(
              <div>
                <div style={{background:"rgba(239,68,68,0.08)",border:`1px solid ${C.red}33`,borderRadius:"12px",padding:"14px",marginBottom:"16px"}}>
                  <div style={{fontSize:"13px",fontWeight:700,color:C.red,marginBottom:"6px"}}>The single biggest threat to your deficit</div>
                  <div style={{fontSize:"12px",color:C.sub,lineHeight:1.65}}>A 500 kcal deficit built carefully all day can be wiped out in 10 minutes at 2AM. This is not a willpower problem. It is structural. The fix is structural.</div>
                </div>
                <div style={{fontSize:"10px",color:C.muted,letterSpacing:"0.14em",textTransform:"uppercase",fontWeight:700,marginBottom:"10px"}}>The 5 Fixes — In Order of Priority</div>
                {NIGHT_FIXES.map((f,i)=>{
                  const is=IMPACT_STYLE[f.impact];
                  return(
                    <div key={i} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:"12px",
                      padding:"13px",marginBottom:"8px",display:"flex",gap:"12px",alignItems:"flex-start"}}>
                      <div style={{width:"36px",height:"36px",borderRadius:"8px",background:is.bg,
                        display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                        <span style={{fontSize:"11px",fontWeight:800,color:is.color,fontFamily:"'DM Mono',monospace"}}>{f.n}</span>
                      </div>
                      <div style={{flex:1}}>
                        <div style={{display:"flex",alignItems:"center",gap:"7px",marginBottom:"4px",flexWrap:"wrap"}}>
                          <span style={{fontSize:"13px",fontWeight:700}}>{f.fix}</span>
                          <Tag label={f.impact} color={is.color} bg={is.bg}/>
                        </div>
                        <div style={{fontSize:"12px",color:C.muted,lineHeight:1.6}}>{f.how}</div>
                      </div>
                    </div>
                  );
                })}
                <div style={{fontSize:"10px",color:C.muted,letterSpacing:"0.14em",textTransform:"uppercase",fontWeight:700,margin:"16px 0 10px"}}>2AM Rescue Foods</div>
                {RESCUE.map((r,i)=>{
                  const isJunk=i===3;
                  return(
                    <div key={i} style={{background:isJunk?"rgba(239,68,68,0.06)":C.card,
                      border:`1px solid ${isJunk?C.red+"33":C.border}`,borderRadius:"12px",padding:"13px",
                      marginBottom:"8px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"10px"}}>
                      <div style={{flex:1}}>
                        <div style={{fontSize:"13px",fontWeight:700,color:isJunk?C.red:C.text}}>{r.o}</div>
                        <div style={{fontSize:"11px",color:C.muted,marginTop:"3px",fontFamily:"'DM Mono',monospace"}}>{r.k} · {r.p} protein</div>
                      </div>
                      <div style={{fontSize:"12px",fontWeight:700,color:isJunk?C.red:C.green,flexShrink:0}}>{r.verdict}</div>
                    </div>
                  );
                })}
              </div>
            )}

            {section==="sunday"&&plan==="uk"&&(
              <div>
                <div style={{background:C.purpDim,border:`1px solid ${C.purple}33`,borderRadius:"12px",
                  padding:"12px 14px",fontSize:"12px",color:"#C4B5FD",marginBottom:"18px",lineHeight:1.65}}>
                  Controlled day. Not a cheat day. Not a punishment day. Every decision is made before you leave the house.
                </div>
                <div style={{position:"relative"}}>
                  <div style={{position:"absolute",left:"19px",top:"20px",bottom:"20px",width:"2px",
                    background:`linear-gradient(to bottom,${C.purple}66,${C.purple}08)`,borderRadius:"2px"}}/>
                  {PLANS.uk.sunday.map((s,i)=>{
                    const sc=SUN_STYLE[s.type];
                    return(
                      <div key={i} style={{display:"flex",gap:"15px",alignItems:"flex-start",marginBottom:"16px"}}>
                        <div style={{width:"40px",height:"40px",borderRadius:"50%",background:C.card,
                          border:`2px solid ${sc.color}44`,display:"flex",alignItems:"center",justifyContent:"center",
                          fontSize:"14px",flexShrink:0,position:"relative",zIndex:1}}>{s.icon}</div>
                        <div style={{flex:1,paddingTop:"5px"}}>
                          <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"3px",flexWrap:"wrap"}}>
                            <span style={{fontSize:"10px",fontFamily:"'DM Mono',monospace",color:sc.color,fontWeight:500}}>{s.t}</span>
                            <span style={{fontSize:"10px",fontWeight:700,color:C.muted,letterSpacing:"0.08em",textTransform:"uppercase"}}>{s.ph}</span>
                          </div>
                          <div style={{fontSize:"12px",color:"#CBD5E1",lineHeight:1.6}}>{s.a}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {topTab==="tracker"&&<Tracker planPhase={plan}/>}

      </div>
    </div>
  );
}
