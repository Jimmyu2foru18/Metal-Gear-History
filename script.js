const timelineData = [
  {
    id: 1,
    year: 1930,
    era: "The 1930s",
    title: "The Birth of The Boss",
    operatives: ["The Boss"],
    conflict: "Origins",
    summary: "The Boss is born in the United States. Her early life remains classified, but she would grow to become one of the most formidable soldiers of the 20th century, founding the Cobra Unit and setting in motion the events that would define the entire Metal Gear saga.",
    detailedRole: "The Boss emerges as the progenitor of the 20th century's most influential military lineage. Her birth marks the origin of a genetic and philosophical bloodline that would produce Big Boss, Solid Snake, Liquid Snake, and Solidus Snake. She establishes the Cobra Unit during WWII and later mentors Naked Snake, instilling in him the philosophy of war, nation, and purpose that becomes the ideological backbone of the entire saga. Her 1957 encounter with astronaut Yevgeny Borisovitch Volgin and subsequent recovery of the Philosophers' Legacy funds set the stage for decades of shadow warfare.",
    source: "Case study derived from Metal Gear Solid 3: Snake Eater (2004) supplementary materials, Metal Gear Solid: Peace Walker (2010) classified dossiers, and The Phantom Pain (2015) audio logs.",
    citation: "VERIFIED // MGS3_INTEL_001 // KJP_ARCHIVE_1975",
    tags: ["Origins", "The Boss", "Cobra Unit"],
    image: "https://placehold.co/800x400/0a0e0f/3a5f0b?text=THE+BOSS+1930"
  },
  {
    id: 2,
    year: 1934,
    era: "The 1930s",
    title: "Birth of Naked Snake",
    operatives: ["Naked Snake"],
    conflict: "Origins",
    summary: "John, later known as Naked Snake, is born. The future savior of the world and its greatest enemy, his genetic lineage would tie him to The Boss and set the stage for decades of conflict across the globe.",
    detailedRole: "Naked Snake (birth name John) is born as the genetic progeny of The Boss, making him the physical manifestation of her philosophical legacy. His unique genetic makeup—developed through the Les Enfants Terribles project in the 1970s—makes him the template for the three bodies of Big Boss (Solid, Liquid, and Solidus). He serves as the player surrogate in MGS3, transforming from a loyal FOX operative into the legendary Big Boss. His journey represents the tragic arc of a soldier seeking purpose beyond nation-state ideology, ultimately founding MSF and Outer Heaven.",
    source: "Case study derived from Metal Gear Solid 3: Snake Eater (2004), Metal Gear Solid: Portable Ops (2006), Metal Gear Solid: Peace Walker (2010), and The Phantom Pain (2015).",
    citation: "VERIFIED // MGS3_INTEL_002 // KJP_ARCHIVE_1975 // LET_PROJECT_FILES",
    tags: ["Origins", "Naked Snake", "Big Boss"],
    image: "https://placehold.co/800x400/0a0e0f/3a5f0b?text=NACKED+SNAKE+1934"
  },
  {
    id: 3,
    year: 1944,
    era: "World War II",
    title: "Operation Cobra",
    operatives: ["The Boss", "Naked Snake"],
    conflict: "World War II",
    summary: "The Boss leads the legendary Cobra Unit through the Battle of Normandy and subsequent operations across Europe. Her philosophy of war, nation, and purpose begins to take shape.",
    detailedRole: "The Boss commands the Cobra Unit—an elite special forces unit composed of her most trusted soldiers, each codenamed after a member of the animal kingdom. During WWII, the unit executes high-risk missions including the D-Day landings and subsequent European theater operations. Her leadership style emphasizes unconditional loyalty and the transcendence of national borders, believing that soldiers should fight for a cause rather than a country. This philosophy is later codified into the MSF's founding principles and becomes the ideological fault line of the entire Metal Gear saga.",
    source: "Case study derived from Metal Gear Solid 3: Snake Eater (2004) classified briefing documents and Cobra Unit personnel files.",
    citation: "VERIFIED // COBRA_UNIT_FILES // WWII_ARCHIVE_1944 // MGS3_BRIEFING",
    tags: ["WWII", "The Boss", "Cobra Unit"],
    image: "https://placehold.co/800x400/0a0e0f/3a5f0b?text=COBRA+UNIT+1944"
  },
  {
    id: 4,
    year: 1961,
    era: "The 1960s",
    title: "Formation of FOX",
    operatives: ["Naked Snake"],
    conflict: "Cold War",
    summary: "Naked Snake is recruited into the newly formed FOX special forces unit under Zero's command. The stage is set for Operation Snake Eater, a mission that will change the course of history.",
    detailedRole: "Naked Snake is recruited by Zero into FOX, a covert special forces unit designed for deniable operations during the Cold War. The unit operates under the guise of a CIA black-ops team but is actually funded by the Philosophers, a secret cabal controlling global politics. Snake's selection is based on his exceptional physical abilities and his lack of ideological baggage. FOX becomes the testing ground for the 'new world order' envisioned by Zero, where a single, ideologically pure soldier can reshape global politics through surgical intervention.",
    source: "Case study derived from Metal Gear Solid 3: Snake Eater (2004) FOX unit dossiers and The Phantom Pain (2015) cutscene transcripts.",
    citation: "VERIFIED // FOX_DOSSIER_001 // KJP_ARCHIVE_1961 // ZERO_BRIEFING_FILES",
    tags: ["FOX", "Cold War", "Naked Snake"],
    image: "https://placehold.co/800x400/0a0e0f/3a5f0b?text=FOX+UNIT+1961"
  },
  {
    id: 5,
    year: 1964,
    era: "The 1960s",
    title: "Operation Snake Eater",
    operatives: ["Naked Snake", "The Boss", "Revolver Ocelot"],
    conflict: "Cold War",
    summary: "Naked Snake is deployed to Tselinoyarsk, USSR, to assassinate rogue Soviet scientist Nikolai Sokolov and destroy the Shagohod. He faces the Cobra Unit, battles his mentor The Boss, and unknowingly fulfills a political sacrifice.",
    detailedRole: "Naked Snake executes a high-risk infiltration of Tselinoyarsk, USSR, to neutralize defecting scientist Nikolai Sokolov and destroy the Shagohod—Volgin's prototype nuclear-armed tank. He single-handedly defeats the Cobra Unit (The Fury, The End, The Fear, The Sorrow, and The Pain) and engages in a climactic confrontation with The Boss at the summit of the Groznyj Grad. The mission succeeds tactically but results in The Boss's death, which is orchestrated as a political sacrifice to prevent nuclear war and justify the US acquisition of the Philosophers' Legacy. Revolver Ocelot (then Agent Ocelot) facilitates the mission as a double agent.",
    source: "Case study derived from Metal Gear Solid 3: Snake Eater (2004) mission logs, Cobra Unit personnel files, and post-mission debriefing documents.",
    citation: "VERIFIED // MGS3_MISSION_LOG // COBRA_CASUALTY_REPORT // PHILOSOPHERS_LEGACY_1964",
    tags: ["Snake Eater", "Cold War", "The Boss"],
    image: "https://placehold.co/800x400/0a0e0f/3a5f0b?text=SNAKE+EATER+1964"
  },
  {
    id: 6,
    year: 1970,
    era: "The 1970s",
    title: "San Hieronymo Incident",
    operatives: ["Naked Snake"],
    conflict: "Cold War",
    summary: "Naked Snake, now calling himself Big Boss, is captured by a rogue unit of Soviet soldiers in Colombia. He forms an alliance with Roy Campbell and faces the return of a familiar face from his past.",
    detailedRole: "Big Boss is shot down over Colombia and captured by a rogue Soviet unit led by Gene. Instead of executing him, Gene offers Big Boss command of the unit, revealing that the mission was a test orchestrated by the Philosophers. Big Boss refuses and allies with Roy Campbell, who has infiltrated the unit as a mole. Together they defeat Gene's forces and recover the Philosophers' Legacy. This incident solidifies Big Boss's rejection of Zero's vision and plants the seeds for the formation of MSF.",
    source: "Case study derived from Metal Gear Solid: Portable Ops (2006) mission logs, CIA declassified documents, and Roy Campbell personnel file.",
    citation: "VERIFIED // MGS_PO_ARCHIVE // PHILOSOPHERS_LEGACY_1970 // CAMPBELL_MOLE_FILES",
    tags: ["Portable Ops", "Cold War", "Big Boss"],
    image: "https://placehold.co/800x400/0a0e0f/3a5f0b?text=SAN+HIERONYMO+1970"
  },
  {
    id: 7,
    year: 1971,
    era: "The 1970s",
    title: "Founding of Militaires Sans Frontières",
    operatives: ["Big Boss", "Kazuhira Miller"],
    conflict: "Cold War",
    summary: "Big Boss establishes MSF in Colombia, a private military company dedicated to fighting for the true freedom of war—where soldiers choose their battles, not politicians.",
    detailedRole: "Big Boss establishes Militaires Sans Frontières (MSF) in Colombia, co-founded with Kazuhira Miller (Kaz). The organization is founded on the principle that soldiers should have the freedom to choose their battles, free from political manipulation. MSF operates as a private military contractor but maintains ideological purity by refusing to work for any government that would use soldiers as political tools. The organization becomes a haven for soldiers seeking purpose beyond the constraints of the Cold War binary. MSF's Mother Base serves as a prototype for the independent military states Big Boss envisions.",
    source: "Case study derived from Metal Gear Solid: Peace Walker (2010) MSF founding documents, Kazuhira Miller testimony, and Mother Base personnel records.",
    citation: "VERIFIED // MSF_CHARTER_1971 // KAZ_TESTIMONY // MOTHER_BASE_LOGS",
    tags: ["Peace Walker", "MSF", "Big Boss"],
    image: "https://placehold.co/800x400/0a0e0f/3a5f0b?text=MSF+1971"
  },
  {
    id: 8,
    year: 1974,
    era: "The 1970s",
    title: "Peace Walker Project",
    operatives: ["Big Boss", "Paz Ortega Andrade"],
    conflict: "Cold War",
    summary: "MSF is drawn into a global crisis involving nuclear-equipped walking tanks. Big Boss confronts the Cold War's most dangerous ideologies and the specter of his own legacy.",
    detailedRole: "MSF is hired to protect Costa Rica from Soviet and CIA-backed incursions, leading to the discovery of the Peace Walker Project—a series of autonomous nuclear-armed bipedal tanks designed to serve as a perfect deterrent. Big Boss confronts the ideological architects of the project, including former KGB officer Volgin and the mysterious Paz Ortega Andrade, a KGB agent embedded within MSF. The mission culminates in the destruction of the Peace Walker prototype at the Nicaraguan border. Big Boss's refusal to accept nuclear deterrence as a legitimate defense philosophy marks his final break with Zero's vision of a unified world order.",
    source: "Case study derived from Metal Gear Solid: Peace Walker (2010) mission archives, Paz Ortega Andrade interrogation transcripts, and Peace Walker technical specifications.",
    citation: "VERIFIED // MGS_PW_ARCHIVE // PEACE_WALKER_SPECS // PAZ_INTERROGATION_1974",
    tags: ["Peace Walker", "Cold War", "Nuclear"],
    image: "https://placehold.co/800x400/0a0e0f/3a5f0b?text=PEACE+WALKER+1974"
  },
  {
    id: 9,
    year: 1975,
    era: "The 1970s",
    title: "Destruction of MSF",
    operatives: ["Big Boss", "Venom Snake"],
    conflict: "Cold War",
    summary: "The XOF unit, a covert CIA black-ops team, launches a devastating attack on Mother Base. Big Boss and his Medic are critically injured, setting in motion the legend of Venom Snake.",
    detailedRole: "XOF, a covert CIA black-ops unit commanded by Skull Face, launches a surprise attack on Mother Base as part of 'Operation Skull Face.' The assault is designed to eliminate Big Boss and seize control of the MSF's nuclear stockpile and Metal Gear technology. Big Boss and his personal medic are critically wounded during the attack. In the aftermath, the medic undergoes extensive cranial reconstruction and identity rewriting, emerging as Venom Snake—a body double who assumes Big Boss's identity to protect the real Big Boss as he enters a nine-year coma. The destruction of MSF marks the end of Big Boss's first attempt at an independent military state.",
    source: "Case study derived from Metal Gear Solid V: Ground Zeroes (2014) mission logs, XOF unit dossiers, and Venom Snake identity files.",
    citation: "VERIFIED // MGSV_GZ_ARCHIVE // XOF_DOSSIER // VENOM_IDENTITY_FILES // SKULL_FACE_NOTES",
    tags: ["Ground Zeroes", "MSF", "Big Boss"],
    image: "https://placehold.co/800x400/0a0e0f/3a5f0b?text=GROUND+ZEROES+1975"
  },
  {
    id: 10,
    year: 1984,
    era: "The 1980s",
    title: "Shadow Moses Island Incident",
    operatives: ["Solid Snake", "Liquid Snake", "Gray Fox"],
    conflict: "Shadow Moses",
    summary: "FOXHOUND's armed takeover of Shadow Moses Island triggers a global nuclear crisis. Solid Snake, a retired soldier, is pulled back into action to infiltrate the island and confront the renegade unit.",
    detailedRole: "FOXHOUND, a renegade special forces unit led by Liquid Snake, seizes Shadow Moses Island and threatens to launch a nuclear warhead unless their demands are met. Solid Snake, a retired operative living in Alaska, is coerced into infiltrating the facility. He faces off against the Genome Soldiers, confronts the Cyborg Ninja (Gray Fox), and discovers that Liquid is his genetic brother—a product of the Les Enfants Terribles project. The mission reveals Metal Gear REX, a nuclear-armed bipedal tank, and exposes the Patriots' manipulation of global events. Solid Snake ultimately defeats Liquid and prevents the nuclear launch, but at great personal cost.",
    source: "Case study derived from Metal Gear Solid (1998) mission logs, FOXHOUND personnel files, and Genome Soldier genetic records.",
    citation: "VERIFIED // MGS1_ARCHIVE // FOXHOUND_DOSSIER // GENOME_PROJECT_FILES // REX_SPECS",
    tags: ["MGS1", "Shadow Moses", "FOXHOUND"],
    image: "https://placehold.co/800x400/0a0e0f/3a5f0b?text=SHADOW+MOSES+1984"
  },
  {
    id: 11,
    year: 1995,
    era: "The 1990s",
    title: "Zanzibar Land Disturbance",
    operatives: ["Solid Snake", "Big Boss"],
    conflict: "Outer Heaven",
    summary: "Big Boss returns in a full Metal Gear-equipped fortress state in Central Asia. Solid Snake is deployed once more to stop him, culminating in a final confrontation between father and son.",
    detailedRole: "Big Boss establishes Outer Heaven in Zanzibar Land, a fortified state equipped with Metal Gear TX-55. He employs Gray Fox as his top operative and commands an army of mercenaries. Solid Snake is deployed to infiltrate the fortress and destroy the Metal Gear, engaging in a brutal campaign across the desert stronghold. The mission culminates in a final confrontation between father and son, where Big Boss is seemingly killed. However, this death is later revealed to be a ruse, as Big Boss's consciousness is transferred into a cybernetic body. The incident marks Solid Snake's transition from reluctant operative to legendary soldier.",
    source: "Case study derived from Metal Gear 2: Solid Snake (1990) mission logs, Outer Heaven intelligence reports, and Big Boss post-mortem analysis.",
    citation: "VERIFIED // MG2_ARCHIVE // OUTER_HEAVEN_INTEL // BIG_BOSS_POST_MORTEM",
    tags: ["MG2", "Outer Heaven", "Big Boss"],
    image: "https://placehold.co/800x400/0a0e0f/3a5f0b?text=ZANZIBAR+1995"
  },
  {
    id: 12,
    year: 1999,
    era: "The 1990s",
    title: "Tanker Incident",
    operatives: ["Solid Snake", "Olga Gurlukovich"],
    conflict: "Tanker",
    summary: "A new Metal Gear—the Arsenal Gear—is smuggled into New York City under the guise of a salvage tanker. Snake must expose the deception and prevent a new global threat from emerging.",
    detailedRole: "Solid Snake infiltrates a disguised tanker in New York Harbor to expose the smuggling of Arsenal Gear—a submersible nuclear-armed bipedal tank capable of launching multiple warheads. He is framed for the tanker's destruction by Revolver Ocelot, who uses the incident to trigger a global search for Metal Gear technology. The mission reveals the Dead Cell terrorist cell and the Patriots' manipulation of public opinion. Olga Gurlukovich, a Russian mercenary, assists Snake under duress but ultimately sacrifices herself to protect her daughter, Sunny.",
    source: "Case study derived from Metal Gear Solid 2: Sons of Liberty (2001) tanker segment logs and Dead Cell intelligence files.",
    citation: "VERIFIED // MGS2_TANKER_LOGS // DEAD_CELL_DOSSIER // ARSENAL_GEAR_SPECS",
    tags: ["MGS2", "Tanker", "Arsenal Gear"],
    image: "https://placehold.co/800x400/0a0e0f/3a5f0b?text=TANKER+INCIDENT+1999"
  },
  {
    id: 13,
    year: 2001,
    era: "The 2000s",
    title: "Big Shell Incident",
    operatives: ["Solid Snake", "Raiden", "Revolver Ocelot"],
    conflict: "Liberia",
    summary: "Terrorists seize the Big Shell environmental cleanup facility. A soldier known as Raiden is sent in to rescue the president, only to uncover a massive simulation engineered by the Patriots.",
    detailedRole: "The terrorist group 'Dead Cell' seizes the Big Shell facility off the coast of Manhattan, demanding the destruction of the Metal Gear RAY prototype and a massive ransom. Raiden, a rookie soldier trained in virtual reality, is deployed to rescue the President and stop the terrorists. The mission is later revealed to be the S3 Plan—a massive social simulation designed by the Patriots to test and manipulate human behavior. Revolver Ocelot manipulates both sides, ultimately stealing Arsenal Gear and triggering the 'S3' upload of the Patriots' control system into the global network.",
    source: "Case study derived from Metal Gear Solid 2: Sons of Liberty (2001) mission logs, S3 Plan documents, and Arsenal Gear technical specifications.",
    citation: "VERIFIED // MGS2_SHELL_LOGS // S3_PLAN_DOCS // ARSENAL_GEAR_SPECS // PATRIOTS_ARCHIVE",
    tags: ["MGS2", "Big Shell", "S3 Plan"],
    image: "https://placehold.co/800x400/0a0e0f/3a5f0b?text=BIG+SHELL+2001"
  },
  {
    id: 14,
    year: 2005,
    era: "The 2000s",
    title: "Galuce Incident",
    operatives: ["Solid Snake", "Revolver Ocelot", "Big Mama"],
    conflict: "Liberia",
    summary: "Solid Snake is deployed to a shadowy South American conflict where private military companies wage war under the control of a new generation of Metal Gear technology.",
    detailedRole: "Solid Snake infiltrates a conflict zone in South America (Galuce) where private military companies are deploying advanced Metal Gear technology under the control of the Patriots. He works alongside Big Mama (Eva), a key figure in the Philosophers' legacy, to disrupt the supply chain of next-generation Metal Gear systems. The mission reveals the Patriots' use of PMCs to maintain global control and the existence of the 'GW' AI system. Revolver Ocelot appears as both ally and adversary, furthering his own agenda of liberating the world from the Patriots' control while manipulating Snake.",
    source: "Case study derived from Metal Gear Solid 4: Guns of the Patriots (2008) South American mission logs and PMC intelligence reports.",
    citation: "VERIFIED // MGS4_GALUCE_LOGS // PMC_INTEL // GW_AI_SPECS // BIG_MAMA_FILES",
    tags: ["MGS4", "Galuce", "PMCs"],
    image: "https://placehold.co/800x400/0a0e0f/3a5f0b?text=GALUCE+2005"
  },
  {
    id: 15,
    year: 2014,
    era: "The 2010s",
    title: "Shadow Moses Revisited",
    operatives: ["Solid Snake", "Liquid Ocelot", "Naomi Hunter"],
    conflict: "Liberia",
    summary: "The world's PMCs unite under Liquid Ocelot's Outer Heaven, triggering a global insurrection. An aged Solid Snake must infiltrate the Middle East, Eastern Europe, and Shadow Moses to stop the final rebellion.",
    detailedRole: "Liquid Ocelot merges with the Patriots' AI systems, gaining control of the global PMC network and launching the 'Outer Heaven' insurrection. Solid Snake, now aged and suffering from accelerated genetic aging due to the cloning process, is deployed across multiple theaters—Middle East, Eastern Europe, and Shadow Moses Island—to disrupt Ocelot's operations. He is aided by Naomi Hunter, who provides medical support and emotional closure. The mission culminates in a final confrontation with Liquid Ocelot in the ruins of Shadow Moses, where Snake uses the modified Metal Gear REX to destroy the Patriots' control system and free humanity from digital manipulation.",
    source: "Case study derived from Metal Gear Solid 4: Guns of the Patriots (2008) full campaign logs, PMC network analysis, and Liquid Ocelot interrogation transcripts.",
    citation: "VERIFIED // MGS4_CAMPAIGN_LOGS // PMC_NETWORK_ANALYSIS // LIQUID_OCELOT_TRANSCRIPTS // PATRIOTS_SHUTDOWN",
    tags: ["MGS4", "Outer Heaven", "Patriots"],
    image: "https://placehold.co/800x400/0a0e0f/3a5f0b?text=MGS4+2014"
  },
  {
    id: 16,
    year: 2018,
    era: "The 2010s",
    title: "Battle of Mother Base",
    operatives: ["Venom Snake", "Revolver Ocelot", "Quiet"],
    conflict: "Cold War",
    summary: "Set nine years after the XOF attack, Venom Snake leads MSF in a proxy war in the Angola-Zaire border region. He builds his own legend while hunting those responsible for the destruction of Mother Base.",
    detailedRole: "Venom Snake, the body double who assumed Big Boss's identity after the 1975 XOF attack, leads Diamond Dogs in a proxy war across the Angola-Zaire border region. He commands a rebuilt Mother Base and assembles a team of elite operatives including Revolver Ocelot and Quiet. The mission involves tracking down those responsible for the XOF attack—Skull Face and the 'Children of the Heavens Drive'—while navigating Cold War politics. Venom Snake's campaign establishes the legend of Big Boss that Solid Snake will later inherit, creating a closed loop of identity and purpose that defines the series' thematic core.",
    source: "Case study derived from Metal Gear Solid V: The Phantom Pain (2015) mission logs, Diamond Dogs personnel files, and Skull Face interrogation transcripts.",
    citation: "VERIFIED // MGSV_TPP_ARCHIVE // DIAMOND_DOGS_LOGS // SKULL_FACE_INTERROGATION // VENOM_IDENTITY_FILES",
    tags: ["MGSV", "Mother Base", "Venom Snake"],
    image: "https://placehold.co/800x400/0a0e0f/3a5f0b?text=MGSV+2018"
  },
  {
    id: 17,
    year: 2023,
    era: "The 2020s",
    title: "Outer Heaven Uprising",
    operatives: ["Solid Snake", "Gray Fox", "Dr. Drago Pettrovich Madnar"],
    conflict: "Outer Heaven",
    summary: "In South Africa, a mercenary known as Gray Fox reports the existence of a superweapon—Metal Gear—being built by the enigmatic Outer Heaven. The legend of Solid Snake begins.",
    detailedRole: "Gray Fox, operating undercover within Outer Heaven, reports the existence of Metal Gear—a nuclear-armed bipedal tank capable of launching warheads from any terrain—being constructed in South Africa. Outer Heaven, led by the enigmatic 'Big Boss' (actually a body double), uses the weapon to challenge global superpowers. Solid Snake, a rookie FOXHOUND operative, is infiltrated into the fortress to destroy the Metal Gear. He faces off against Gray Fox (who later reveals himself as the Cyborg Nincy), defeats Dr. Madnar, and destroys the TX-22 Metal Gear. The mission establishes Solid Snake as a legendary soldier and begins the cycle of father-son conflict that defines the saga.",
    source: "Case study derived from Metal Gear (1987) mission logs, FOXHOUND intelligence reports, and Outer Heaven technical documentation.",
    citation: "VERIFIED // MG1_ARCHIVE // FOXHOUND_INTEL_1987 // OUTER_HEAVEN_TECH_DOCS // GRAY_FOX_REPORT",
    tags: ["MG1", "Outer Heaven", "Solid Snake"],
    image: "https://placehold.co/800x400/0a0e0f/3a5f0b?text=OUTER+HEAVEN+2023"
  }
];

// ========== STRATEGIC INDEX BUILDERS ==========
const personsIndex = {};
const conflictsIndex = {};
const yearIndex = {};

timelineData.forEach(entry => {
  entry.operatives.forEach(person => {
    if (!personsIndex[person]) personsIndex[person] = [];
    personsIndex[person].push(entry);
  });
  
  if (!conflictsIndex[entry.conflict]) conflictsIndex[entry.conflict] = [];
  conflictsIndex[entry.conflict].push(entry);
  
  if (!yearIndex[entry.year]) yearIndex[entry.year] = [];
  yearIndex[entry.year].push(entry);
});

const eras = [...new Set(timelineData.map(item => item.era))];
const protagonists = Object.keys(personsIndex).sort();
const conflicts = Object.keys(conflictsIndex).sort();
const years = Object.keys(yearIndex).sort((a, b) => a - b);

// ========== VIEW STATE ==========
let currentView = 'timeline';

function switchView(view) {
  currentView = view;
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.classList.toggle('view-btn--active', btn.dataset.view === view);
  });
  
  const timelineView = document.getElementById('timeline-view');
  const strategicView = document.getElementById('strategic-view');
  
  if (view === 'timeline') {
    timelineView.style.display = 'block';
    strategicView.style.display = 'none';
    renderTimeline(timelineData);
  } else {
    timelineView.style.display = 'none';
    strategicView.style.display = 'block';
    renderStrategicOverview();
  }
}

// ========== POPULATE FILTERS ==========
function populateFilters() {
  const eraFilter = document.getElementById('era-filter');
  const protagonistFilter = document.getElementById('protagonist-filter');
  const conflictFilter = document.getElementById('conflict-filter');

  eras.forEach(era => {
    const opt = document.createElement('option');
    opt.value = era;
    opt.textContent = era;
    eraFilter.appendChild(opt);
  });

  protagonists.forEach(protag => {
    const opt = document.createElement('option');
    opt.value = protag;
    opt.textContent = protag;
    protagonistFilter.appendChild(opt);
  });

  conflicts.forEach(conflict => {
    const opt = document.createElement('option');
    opt.value = conflict;
    opt.textContent = conflict;
    conflictFilter.appendChild(opt);
  });
}

// ========== RENDER TIMELINE VIEW ==========
function renderTimeline(data) {
  const container = document.getElementById('timeline-nodes');
  const eventCount = document.getElementById('event-count');
  container.innerHTML = '';

  eventCount.textContent = data.length;

  if (data.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <h2 class="no-results__title">NO DATA FOUND</h2>
        <p class="no-results__text">Adjust your search parameters and try again.</p>
      </div>
    `;
    return;
  }

  data.forEach((item, index) => {
    const node = document.createElement('article');
    node.className = 'timeline__node';
    node.setAttribute('data-year', item.year);
    node.setAttribute('data-era', item.era);
    node.setAttribute('data-protagonists', item.operatives.join(',').toLowerCase());
    node.setAttribute('data-conflict', item.conflict.toLowerCase());
    node.style.transitionDelay = `${index * 0.05}s`;

    node.innerHTML = `
      <div class="node-marker">
        <span class="node-marker__year">${item.year}</span>
        <span class="node-marker__era">${item.era}</span>
      </div>
      <div class="knowledge-card">
        <img class="knowledge-card__image" src="${item.image}" alt="Concept art for ${item.title}" loading="lazy" onerror="this.style.display='none'">
        <h2 class="knowledge-card__title">${item.title}</h2>
        <p class="knowledge-card__operatives">${item.operatives.join(' // ')}</p>
        <p class="knowledge-card__summary">${item.summary}</p>
        <div class="knowledge-card__meta">
          ${item.tags.map(tag => `<span class="meta-tag meta-tag--primary">${tag}</span>`).join('')}
        </div>
        <button class="dossier-toggle" aria-expanded="false" data-target="dossier-${item.id}">
          <span class="dossier-toggle__text">ACCESS DOSSIER</span>
          <span class="dossier-toggle__icon">[+]</span>
        </button>
        <div class="knowledge-card__dossier" id="dossier-${item.id}" hidden>
          <div class="dossier-section">
            <h3 class="dossier-section__title">ENHANCED ROLE / ACTIONS</h3>
            <p class="dossier-section__content">${item.detailedRole}</p>
          </div>
          <div class="dossier-section">
            <h3 class="dossier-section__title">SOURCE / CASE STUDY</h3>
            <p class="dossier-section__content dossier-section__content--source">${item.source}</p>
          </div>
          <div class="dossier-section dossier-section--citation">
            <h3 class="dossier-section__title">VERIFICATION TAG</h3>
            <p class="dossier-section__content dossier-citation">${item.citation}</p>
          </div>
        </div>
      </div>
    `;

    container.appendChild(node);
  });

  observeNodes();
  initDossierToggles();
}

// ========== RENDER STRATEGIC OVERVIEW ==========
function renderStrategicOverview() {
  const container = document.getElementById('strategic-content');
  container.innerHTML = '';

  // Overview by Conflict
  const conflictsSection = document.createElement('section');
  conflictsSection.className = 'strategic-section';
  conflictsSection.innerHTML = `
    <h2 class="strategic-section__title">STRATEGIC OVERVIEW BY CONFLICT</h2>
    <p class="strategic-section__subtitle">Longitudinal analysis organized by major conflict theaters</p>
  `;

  conflicts.forEach(conflict => {
    const entries = conflictsIndex[conflict].sort((a, b) => a.year - b.year);
    const conflictBlock = document.createElement('div');
    conflictBlock.className = 'strategic-block';
    conflictBlock.innerHTML = `
      <h3 class="strategic-block__title">${conflict.toUpperCase()}</h3>
      <div class="strategic-block__timeline">
        ${entries.map(entry => `
          <div class="strategic-entry">
            <div class="strategic-entry__header">
              <span class="strategic-entry__year">${entry.year}</span>
              <span class="strategic-entry__title">${entry.title}</span>
            </div>
            <div class="strategic-entry__personnel">
              ${entry.operatives.map(p => `<span class="strategic-entry__person">${p}</span>`).join('')}
            </div>
            <div class="strategic-entry__dossier">
              <div class="strategic-entry__section">
                <strong>ROLE:</strong> ${entry.detailedRole.substring(0, 200)}...
              </div>
              <div class="strategic-entry__section">
                <strong>SOURCE:</strong> ${entry.source.substring(0, 150)}...
              </div>
              <div class="strategic-entry__section strategic-entry__section--citation">
                <strong>CITATION:</strong> <code>${entry.citation}</code>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    conflictsSection.appendChild(conflictBlock);
  });

  container.appendChild(conflictsSection);

  // Overview by Individual
  const personsSection = document.createElement('section');
  personsSection.className = 'strategic-section';
  personsSection.innerHTML = `
    <h2 class="strategic-section__title">STRATEGIC OVERVIEW BY OPERATIVE</h2>
    <p class="strategic-section__subtitle">Longitudinal analysis organized by individual personnel</p>
  `;

  protagonists.forEach(person => {
    const entries = personsIndex[person].sort((a, b) => a.year - b.year);
    const personBlock = document.createElement('div');
    personBlock.className = 'strategic-block';
    personBlock.innerHTML = `
      <h3 class="strategic-block__title">${person.toUpperCase()}</h3>
      <div class="strategic-block__timeline">
        ${entries.map(entry => `
          <div class="strategic-entry">
            <div class="strategic-entry__header">
              <span class="strategic-entry__year">${entry.year}</span>
              <span class="strategic-entry__title">${entry.title}</span>
              <span class="strategic-entry__conflict">${entry.conflict}</span>
            </div>
            <div class="strategic-entry__dossier">
              <div class="strategic-entry__section">
                <strong>ROLE:</strong> ${entry.detailedRole.substring(0, 200)}...
              </div>
              <div class="strategic-entry__section">
                <strong>SOURCE:</strong> ${entry.source.substring(0, 150)}...
              </div>
              <div class="strategic-entry__section strategic-entry__section--citation">
                <strong>CITATION:</strong> <code>${entry.citation}</code>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    personsSection.appendChild(personBlock);
  });

  container.appendChild(personsSection);
}

// ========== DOSSIER TOGGLES ==========
function initDossierToggles() {
  document.querySelectorAll('.dossier-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const dossier = document.getElementById(targetId);
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      
      btn.setAttribute('aria-expanded', !isExpanded);
      dossier.hidden = isExpanded;
      btn.querySelector('.dossier-toggle__text').textContent = isExpanded ? 'ACCESS DOSSIER' : 'CLOSE DOSSIER';
      btn.querySelector('.dossier-toggle__icon').textContent = isExpanded ? '[+]' : '[−]';
    });
  });
}

// ========== FILTER LOGIC ==========
function filterTimeline() {
  if (currentView !== 'timeline') return;
  
  const era = document.getElementById('era-filter').value.toLowerCase();
  const protagonist = document.getElementById('protagonist-filter').value.toLowerCase();
  const conflict = document.getElementById('conflict-filter').value.toLowerCase();
  const search = document.getElementById('search-input').value.toLowerCase().trim();

  const filtered = timelineData.filter(item => {
    const matchesEra = era === 'all' || item.era.toLowerCase() === era;
    const matchesProtagonist = protagonist === 'all' || item.operatives.some(op => op.toLowerCase().includes(protagonist));
    const matchesConflict = conflict === 'all' || item.conflict.toLowerCase() === conflict;
    const matchesSearch = search === '' ||
      item.title.toLowerCase().includes(search) ||
      item.summary.toLowerCase().includes(search) ||
      item.detailedRole.toLowerCase().includes(search) ||
      item.operatives.some(op => op.toLowerCase().includes(search)) ||
      item.tags.some(tag => tag.toLowerCase().includes(search)) ||
      item.citation.toLowerCase().includes(search);

    return matchesEra && matchesProtagonist && matchesConflict && matchesSearch;
  });

  renderTimeline(filtered);
}

// ========== PARALLAX ==========
function initParallax() {
  const rail = document.querySelector('.timeline__rail');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const parallax = scrollY * 0.15;
        rail.style.transform = `translateX(-50%) translateY(${parallax}px)`;
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ========== AUDIO ==========
function initAudio() {
  let audioCtx;
  let isPlaying = false;

  function toggleAudio() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (isPlaying) {
      isPlaying = false;
      return;
    }

    isPlaying = true;
    const bufferSize = audioCtx.sampleRate * 2;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.02;
    }

    const source = audioCtx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    source.connect(audioCtx.destination);
    source.start();
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'a') toggleAudio();
  });
}

// ========== INIT ==========
function init() {
  populateFilters();
  renderTimeline(timelineData);
  initParallax();
  initAudio();

  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => switchView(btn.dataset.view));
  });

  document.getElementById('era-filter').addEventListener('change', filterTimeline);
  document.getElementById('protagonist-filter').addEventListener('change', filterTimeline);
  document.getElementById('conflict-filter').addEventListener('change', filterTimeline);
  document.getElementById('search-input').addEventListener('input', filterTimeline);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
