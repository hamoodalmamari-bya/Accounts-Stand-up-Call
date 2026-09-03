/**
 * Accounts stand-up feed. Netlify Functions v2 (ESM), which is what Blobs needs
 * in order to hand us a real store. The previous CommonJS version fell back to
 * per-instance memory, so state was never actually shared or persisted.
 *
 *   GET  /api/standup            the board reads the task list here
 *   POST /api/standup?key=...    Notion's automation posts changed pages here
 *   GET  /api/standup?reset=...  clear stored edits, back to the snapshot
 *   GET  /api/standup?debug=...  show exactly what is stored
 */

import { getStore } from "@netlify/blobs";

export const config = { path: "/api/standup" };

const SEED = {
 "generatedAt": "2026-09-03T08:00:00Z",
 "source": "snapshot",
 "doneCount": 10,
 "order": [
  "MEEZA",
  "Omantel",
  "TRA",
  "Ooredoo Oman",
  "Otech",
  "Aramco",
  "NTDP",
  "GTM"
 ],
 "tasks": [
  {
   "id": "3aa440df10a98009abcac4e3a36d7f6d",
   "objective": "Success Story",
   "status": "On Hold",
   "project": null,
   "owners": [
    "Hamood Almamari"
   ],
   "due": "2026-07-13",
   "account": "MEEZA",
   "group": "MEEZA",
   "log": "22/06/2026:Aligned with Ahmed Albadi and discussed the key aspects of the Success Story with Meraj.\n23/06/2026: work on the success story is ongoing\n24/06/2026: added all evidence (screenshots, diagrams, emails etc.) to the success story. And shared for AG review. I am missing a quote from Meraj.\n25/06/2026: we changed the reviwer to Vikas\n28/06/2026: In reviwe with Vikas\n01/07/2026: The content is complete, and the formatting and review have also been completed. The only remaining item is quote from MEEZA.\n02/07/2026: AG feedback on the overall Success story is not satisfactory. It need rework on the content and the formatting.\n09/07/2026: Hamood shared a new version of the success story.\n13/07/2026: AG provided feedback and involved both the GTM team and Saritha in further developing the document.\n15/07/2026: Hamood shared a new version of the success story.\n19/07/2026: Concise Version: A 2-3 page format intended for general customer outreach and website publication. Hamood Almamari and Saritha Riaz are currently working on developing this version.\n21/07/2026: Working on three different versions of the success story, focusing on branding and color adjustments\n update: Task is on hold and will resume after the arranged workshop with MEEZA C-level executives on"
  },
  {
   "id": "3aa440df10a98024bfe2d424b32af24a",
   "objective": "Follow up with QRDI on the FA addendum, then confirm the status of the PO issuance and installment processing.",
   "status": "In progress",
   "project": null,
   "owners": [
    "Hamood Almamari"
   ],
   "due": "2026-09-10",
   "account": "MEEZA",
   "group": "MEEZA",
   "log": "22/06/2026: We-sign the FA addendum shared with QRDI on 21 June\n29/06/2026: The FA amendment is pending a counter-signature from the QRDI Secretary General (SG).\n02/07/2026: Still waiting for the signing.\n06/07/2026: follow up call with Dr.Abdelhak regarding delays with the QRDI FA amendment. Dr. Abdelhak acknowledged that the process was taking too long, promised to investigate the status, and set a deadline for the end of the week.\n09/07/2026: Dr Abdelhak replied that there is no update yet and that he will get back to us next week.\n14/07/2026: On Hold Dr Abdelhak advised that business activities had been suspended for four days following the passing of His Highness the Father Amir, Sheikh Hamad bin Khalifa Al Thani. Therefore, he was unable to obtain an update on the addendum signature and will revert next week.\n19/07/2026: In Progress\n21/07/2026: On Hold Dr Abdelhak is on leave till 20th August 2026\n update: Dr.Abdelhak shared the signed amendment now waiting update on PO and first payment from QRDI"
  },
  {
   "id": "3aa440df10a980a2bfebe4a57980a838",
   "objective": "Follow up with MEEZA on the submitted commercial offer and actions agreed",
   "status": "On Hold",
   "project": null,
   "owners": [
    "Ahmed Al Ghadani",
    "Saritha Riaz",
    "Wiam Al Kindi",
    "Thamir Alharthy"
   ],
   "due": "2026-09-15",
   "account": "MEEZA",
   "group": "MEEZA",
   "log": "08/07/2026: The document was submitted, and feedback was received to change the currency from USD to QAR.\n09/07/2026: Saritha provided an updated version with the figures converted to QAR. (internal)\n15/07/2026: On Hold All of Qatar is off because of the Amir Father death, the mourning is untill 19 this month\n20/07/2026: In Progress\n21/07/2026: On hold until the technical team (specifically Gareth and Pasquali) returns from annual leave on 25th. Pasquale is back from his time off.\n update : Meeting held with Gareth McElroy to discuss commercial offer and agreed on next actions, MoM link\n update: follow up is on hold and will resume after arranged workshop with C-level executives on"
  },
  {
   "id": "3b2440df10a980e6b287e249a9a32534",
   "objective": "Prepare for the planned workshop",
   "status": "In progress",
   "project": null,
   "owners": [
    "Wiam Al Kindi",
    "Wasan Almahrooqi",
    "Saritha Riaz"
   ],
   "due": "2026-09-03",
   "account": "MEEZA",
   "group": "MEEZA",
   "log": "the meeting shift to"
  },
  {
   "id": "3b4440df10a9800aa062c4c49d20a713",
   "objective": "Prepare draft legal contract",
   "status": "In progress",
   "project": null,
   "owners": [
    "Wiam Al Kindi",
    "Saritha Riaz"
   ],
   "due": "2026-09-10",
   "account": "MEEZA",
   "group": "MEEZA",
   "log": "update: will be working with Saritha on previous available legal contract templates and evaluate best one for MEEZA engagement"
  },
  {
   "id": "3cd440df10a9801ba35cca91e4378f0c",
   "objective": "Get PoV last milestone confirmation from MEEZA team for internal records",
   "status": "In progress",
   "project": null,
   "owners": [
    "Hamood Almamari"
   ],
   "due": "2026-09-03",
   "account": "MEEZA",
   "group": "MEEZA",
   "log": ""
  },
  {
   "id": "3cd440df10a980aa9550ff3eaf52042b",
   "objective": "Arrange team travel (ticket, accommodation)",
   "status": "In progress",
   "project": null,
   "owners": [
    "Osama Al Abri",
    "Farah Albaba"
   ],
   "due": "2026-09-07",
   "account": "MEEZA",
   "group": "MEEZA",
   "log": "update: to arrange business visit Visa first, then arrange flight ticket, accommodation and transportation with Qatar guide."
  },
  {
   "id": "3aa440df10a98086bc3edf6d2ef33145",
   "objective": "Finalise site revenue scope and requirements with stakeholders",
   "status": "In progress",
   "project": "Site revenue",
   "owners": [
    "Khalil Al-Mawaali"
   ],
   "due": "2026-09-15",
   "account": "Omantel",
   "group": "Omantel",
   "log": ": Meeting with AI CoE Senior Manager \"Tazima\" confirmed to push and accelerate engagement with stakeholders (Finance & Data management)\n update: Meeting with \"Tazima\" done, next is meeting with Finance & BI data management teams. Internal alignment session done with technical/product team\n update: meeting with network stakeholders and consumer business planning teams held, next to prepare our draft technical scope and requirements and arrange 1:1 meetings with stakeholders"
  },
  {
   "id": "3cd440df10a9804b97bfc39a77673b8e",
   "objective": "Draft commercial structure for site revenue and align it with investment",
   "status": "In progress",
   "project": "Site revenue",
   "owners": [
    "Khalil Al-Mawaali",
    "Wiam Al Kindi",
    "Saritha Riaz"
   ],
   "due": "2026-09-15",
   "account": "Omantel",
   "group": "Omantel",
   "log": ""
  },
  {
   "id": "3cd440df10a980baaf94dcf2e8910f9d",
   "objective": "Prepare site revenue draft scope and requirements",
   "status": "In progress",
   "project": "Site revenue",
   "owners": [
    "Yasmine Bekhiche",
    "Rocky D"
   ],
   "due": "2026-09-06",
   "account": "Omantel",
   "group": "Omantel",
   "log": ""
  },
  {
   "id": "3cd440df10a9809c851dd03eb5bf8c55",
   "objective": "Prepare site revenue mock up (Demo)",
   "status": "In progress",
   "project": "Site revenue",
   "owners": [
    "Yasmine Bekhiche"
   ],
   "due": "2026-09-06",
   "account": "Omantel",
   "group": "Omantel",
   "log": ""
  },
  {
   "id": "3cd440df10a980c58179e51dd622fa9a",
   "objective": "Arrange 1:1 meetings with site revenue stakeholders to review scope and requirements",
   "status": "In progress",
   "project": "Site revenue",
   "owners": [
    "Khalil Al-Mawaali"
   ],
   "due": "2026-09-06",
   "account": "Omantel",
   "group": "Omantel",
   "log": ""
  },
  {
   "id": "3b2440df10a9801b926ce0552628644d",
   "objective": "Follow up with Strategy & Innovation C-level on investment updates",
   "status": "In progress",
   "project": null,
   "owners": [
    "Ahmed Al Ghadani"
   ],
   "due": "2026-09-15",
   "account": "Omantel",
   "group": "Omantel",
   "log": "update: Ahmed called Baha and feedback is positive on investment discussion, now we need timeline from Omantel on investment decision.\n update: Ahmed Gh had discussion on investment updates and agreed to prioritise site revenue to secure the investment and data centre use case for scalability and growth"
  },
  {
   "id": "3ce440df10a980d199f6c7482d75302e",
   "objective": "Finalise investment letter of engagement",
   "status": "In progress",
   "project": null,
   "owners": [
    "Khalil Al-Mawaali"
   ],
   "due": "2026-09-10",
   "account": "Omantel",
   "group": "Omantel",
   "log": "update: revised letter of engagement sent on"
  },
  {
   "id": "3ab440df10a98041be5bcc2918e927e7",
   "objective": "Follow up with Network Service Experience & Planning VP on next engagement",
   "status": "On Hold",
   "project": null,
   "owners": [
    "Ahmed Al Ghadani"
   ],
   "due": "2026-07-30",
   "account": "Omantel",
   "group": "Omantel",
   "log": ": Ahmed Gh called Abdullah for follow up and he asked for some time to allow him align engagement with Dr.Ali Alhashmi"
  },
  {
   "id": "3ab440df10a980fe85ddeed84692d6fe",
   "objective": "Send letter to TRA CEO with new financial model",
   "status": "On Hold",
   "project": null,
   "owners": [
    "Khalil Al-Mawaali"
   ],
   "due": "2026-08-20",
   "account": "TRA",
   "group": "TRA",
   "log": ": Nasser ask for some time to review. TRA CEO is on leave and CEO direct us to meet Faisal Alshukaili\n update: our contact in TRA asks to hold the letter till CEO resume work and they will need to have discussion with him and align on new financial approach internally."
  },
  {
   "id": "3b2440df10a98066bb33ddea1b1a3289",
   "objective": "Follow up with key contacts in TRA",
   "status": "In progress",
   "project": null,
   "owners": [
    "Khalil Al-Mawaali"
   ],
   "due": "2026-09-07",
   "account": "TRA",
   "group": "TRA",
   "log": "update: called Faisal today and waiting his feedback after he will discuss with Nasser, both are on leave\n update: follow up call done, still waiting updates with CEO"
  },
  {
   "id": "3b4440df10a980c5be3dea8318e42bd0",
   "objective": "Send letter to MTCIT minister",
   "status": "On Hold",
   "project": null,
   "owners": [
    "Khalil Al-Mawaali",
    "Alkhalil Aljabri"
   ],
   "due": "2026-08-20",
   "account": "TRA",
   "group": "TRA",
   "log": "update: met and he suggest to first finalise the discussions with TRA CEO then maybe if required send the letter to MTCIT Minister."
  },
  {
   "id": "3aa440df10a9807da787d5a0cc18a6af",
   "objective": "Start O&M engagement with OO on OO Eye solution",
   "status": "In progress",
   "project": null,
   "owners": [
    "Khalil Al-Mawaali",
    "Wiam Al Kindi"
   ],
   "due": "2026-09-03",
   "account": "Ooredoo Oman",
   "group": "Ooredoo Oman",
   "log": ": we shared our updated terms and conditions with OO procurement team and waiting for PO to start Phase1: assessment\n : OO procurement team shared their feedback on SoW and terms and will finalise them and share the agreement\n update: shared our feedback on service agreement terms and it is finalised, waiting for the PO from OO side.\n update: PO received from OO procurement, now we need to secure the access, laptops availability and OO IT Ops contact person for technical team to start the assessment."
  },
  {
   "id": "3cd440df10a980538ceac313458eb4da",
   "objective": "Finalise OO Eye assessment phase with report submission",
   "status": "In progress",
   "project": null,
   "owners": [
    "Hamood Almamari",
    "Rocky D"
   ],
   "due": "2026-09-14",
   "account": "Ooredoo Oman",
   "group": "Ooredoo Oman",
   "log": "update: waiting confirmation on access, laptops availability, IT Ops contact person and OO project manager availability."
  },
  {
   "id": "3ab440df10a980e4a914cfc07a97b987",
   "objective": "Finalise sales pitch slides customised for Otech",
   "status": "On Hold",
   "project": null,
   "owners": [
    "Wiam Al Kindi"
   ],
   "due": "2026-09-15",
   "account": "Otech",
   "group": "Otech",
   "log": ": first draft shared for review\n : first draft shared for review. Slides are planned to be presented to Otech C-level on first week of September.\n update: Task is on hold and will resume after the arranged workshop with MEEZA C-level executives on"
  },
  {
   "id": "3cd440df10a980ad8fdcf80c87932841",
   "objective": "Initial discussion at LEAP 2026.",
   "status": "In progress",
   "project": null,
   "owners": [
    "Ahmed Al Ghadani"
   ],
   "due": null,
   "account": "Aramco",
   "group": "Aramco",
   "log": ""
  },
  {
   "id": "3cd440df10a98008a9bdcf1313a18850",
   "objective": "Follow up on the second payment status",
   "status": "In progress",
   "project": null,
   "owners": [
    "Mohammed Almotrafi"
   ],
   "due": "2026-09-15",
   "account": "NTDP",
   "group": "NTDP",
   "log": ""
  },
  {
   "id": "3cd440df10a980fea06be3a8dd4b2bf0",
   "objective": "Prepare the report for last payment and follow up status",
   "status": "In progress",
   "project": null,
   "owners": [
    "Mohammed Almotrafi",
    "Alkhalil Aljabri"
   ],
   "due": "2026-09-10",
   "account": "NTDP",
   "group": "NTDP",
   "log": ""
  },
  {
   "id": "3aa440df10a9800f82e0f620f4f550c0",
   "objective": "Finalise Live landing page for data centres",
   "status": "On Hold",
   "project": "GTM",
   "owners": [
    "Wiam Al Kindi",
    "Wasan Almahrooqi"
   ],
   "due": "2026-08-13",
   "account": null,
   "group": "GTM",
   "log": "17/06/2026: Onwership transferred from Ahmed Alghadani to Wiam and Wasan. AG will help.\n21/06/2026: Team reported that the development of the landing page has not yet started because the team is prioritising the completion of the sales pitch\n23/06/2026: Work on the live landing page is currently on hold, as it will only commence once the sales pitch is finalised\n09/07/2026: Wiam has started working on the tasks, and they are currently in progress.\n12/07/2026: Wiam made good progress, and will be sharing the first iteration with the team tomorrow (13/07).\n update: Task is on hold and will resume after the arranged workshop with MEEZA C-level executives on"
  },
  {
   "id": "3aa440df10a9808389a5fc128b69f913",
   "objective": "Finalise refreshed brand",
   "status": "On Hold",
   "project": "GTM",
   "owners": [
    "Ahmed Al Ghadani"
   ],
   "due": "2026-09-30",
   "account": null,
   "group": "GTM",
   "log": "17/06/2026: AG review the first draft of the brand refresh and provide feedback to the freelancer.\n21/06/2026: waiting for the freelancer's weekend to conclude before they proceed with providing feedback on the draft, which is already prepared.\n25/06/2026: AG expecting another iteration from the designer tomorrow (26th)\n29/06/2026: Today AG cancelled the agreement with the contractor as he was not happy with the progress.\n09/07/2026: On Hold Re-evaluating priorities to focus on the new phase of negotiations\n20/07/2026: Ahmed Alghadani confirmed that the previous contract for the brand refreshment has been cancelled. He is currently reviewing a new offer received this past Friday to determine if the team will proceed with the new provider\n21/07/2026: A new offer from a studio for a brand refresh has been received. The engagement will be conducted in phases to test the studio's capabilities. All assets must be created in a standardized, reusable template format that can be easily understood and potentially automated.\n update: Task is on hold and will resume after the arranged workshop with MEEZA C-level executives on"
  },
  {
   "id": "3aa440df10a980f6a72dd784f14be7aa",
   "objective": "Finalise sharp sales pitch",
   "status": "On Hold",
   "project": "GTM",
   "owners": [
    "Wiam Al Kindi",
    "Wasan Almahrooqi"
   ],
   "due": null,
   "account": null,
   "group": "GTM",
   "log": "17/06/2026: Onwership transferred from Ahmed Alghadani to Wiam and Wasan. AG will help.\n21/06/2026: Team advised that finalizing the sales pitch is a required prerequisite before work on the landing page can begin\n22/06/2026: Wiam shared a second draft of the sales pitch with AG. The team planned to hold a session to review the landing page and clarify AG's vision for the project.\n23/06/2026: Wiam shared version three of the sales pitch with the team yesterday and is currently waiting for feedback from AG.\n25/06/2026: no updates, still waiting for feedback from AG. We changed the reviewer to Khalil\n28/06/2026: In review with Khalil\n update: Task is on hold and will resume after the arranged workshop with MEEZA C-level executives on"
  },
  {
   "id": "3ce440df10a98070a54fd30802a38e83",
   "objective": "Follow up on SAS Excellence fund programme updates",
   "status": "In progress",
   "project": "GTM",
   "owners": [
    "Khalil Al-Mawaali"
   ],
   "due": "2026-09-10",
   "account": "MTCIT",
   "group": "GTM",
   "log": ""
  },
  {
   "id": "3ce440df10a980da899dcb1c38c04f23",
   "objective": "ITEX Iraq 2026 event participation with MTCIT",
   "status": "In progress",
   "project": "GTM",
   "owners": [
    "Khalil Al-Mawaali"
   ],
   "due": "2026-09-27",
   "account": "MTCIT",
   "group": "GTM",
   "log": ""
  }
 ]
};
const DONE_AT_SNAPSHOT = 10;

const KEY = process.env.INGEST_KEY || null;
const STORE = "standup";
const SLOT = "edits";

/* Relation properties arrive as page ids, so names are resolved from this table.
   Adding an account in Notion means adding one line here. */
const ACCOUNTS = {
  "246440df10a980729a98dfcba9c7377b": "MEEZA",
  "14f6cd4de9864b18ae3adb6508ffff41": "Omantel",
  "c9c7f81baa66432895529b382bd5e647": "TRA",
  "a5a6b9abf5404a91b337617de42a7ec6": "Ooredoo Oman",
  "3ab440df10a980f485bcf2002b3129c6": "Otech",
  "3cd440df10a980219403f59ff3c48aec": "Aramco",
  "2fb440df10a980c4a9f4d4edcf062fa4": "NTDP",
  "cfa2a7e9f579446b8aa258a68fe817d4": "MTCIT"
};
const ORDER = ["MEEZA", "Omantel", "TRA", "Ooredoo Oman", "Otech", "Aramco", "NTDP", "GTM"];

/* A function, not a constant: a shared object literal would be mutated in place
   and quietly leak edits into every later "empty" state. */
const fresh = () => ({ updatedAt: null, tasks: {}, alias: {} });
let memory = null;                 // only used if Blobs is genuinely unavailable

const nid = (s) => String(s || "").replace(/-/g, "").toLowerCase();
/* Ids from page URLs do not always match the id Notion sends in a webhook, so the
   objective text is used as a second way to recognise a task we already hold. */
const key = (s) => String(s || "").toLowerCase().replace(/\s+/g, " ").trim();

function store() {
  return getStore({ name: STORE, consistency: "strong" });
}

async function readEdits() {
  try {
    const found = await store().get(SLOT, { type: "json" });
    return { data: found ? structuredClone(found) : fresh(), backend: "blobs" };
  } catch (err) {
    return { data: memory ? structuredClone(memory) : fresh(), backend: "memory:" + (err && err.message ? err.message.slice(0, 80) : "unknown") };
  }
}

async function writeEdits(data) {
  memory = structuredClone(data);
  try {
    await store().setJSON(SLOT, data);
    return "blobs";
  } catch (err) {
    return "memory:" + (err && err.message ? err.message.slice(0, 80) : "unknown");
  }
}

/* ---------- mapping a Notion page to a task ---------- */

function propByName(props, name) {
  const hit = Object.entries(props).find(([k]) => k.trim().toLowerCase() === name);
  return hit ? hit[1] : null;
}
function propByType(props, type) {
  return Object.values(props).find(p => p.type === type) || null;
}
const plain = (rich) => (rich || []).map(t => t.plain_text).join("").trim();

function groupFor(account, project) {
  if (account && ORDER.includes(account)) return account;
  if (project && ORDER.includes(project)) return project;
  return account || project || "Internal";
}

function toTask(page) {
  const props = page.properties || {};

  const titleProp = propByName(props, "objective") || propByType(props, "title");
  const objective = plain(titleProp && titleProp.title);
  if (!objective) return null;

  const statusProp = propByName(props, "status") || propByType(props, "status");
  const ownerProp = propByName(props, "owner") || propByType(props, "people");
  const dueProp = propByName(props, "due date") || propByType(props, "date");
  const projectProp = propByName(props, "project") || propByType(props, "select");
  const logProp = propByName(props, "update log");
  const relProp = Object.values(props).find(p => p.type === "relation");

  const accountId = relProp && relProp.relation && relProp.relation[0]
    ? nid(relProp.relation[0].id) : null;
  const account = accountId ? (ACCOUNTS[accountId] || null) : null;
  const project = projectProp && projectProp.select ? projectProp.select.name : null;

  return {
    id: nid(page.id),
    objective,
    status: (statusProp && statusProp.status && statusProp.status.name) || "In progress",
    project,
    owners: ((ownerProp && ownerProp.people) || []).map(p => p.name).filter(Boolean),
    due: (dueProp && dueProp.date && dueProp.date.start) || null,
    account,
    group: groupFor(account, project),
    log: logProp ? plain(logProp.rich_text) : "",
    removed: Boolean(page.in_trash || page.is_archived),
    editedAt: page.last_edited_time || new Date().toISOString()
  };
}

/* ---------- the feed ---------- */

function assemble(edits) {
  const merged = new Map();
  for (const t of SEED.tasks) merged.set(nid(t.id), t);

  const alias = edits.alias || {};
  for (const [storedKey, t] of Object.entries(edits.tasks || {})) {
    const target = nid(alias[storedKey] || storedKey);
    merged.set(target, { ...t, id: target, via: "notion" });
  }

  const all = [...merged.values()].filter(t => !t.removed);
  return {
    generatedAt: edits.updatedAt || SEED.generatedAt,
    source: edits.updatedAt ? "notion" : "snapshot",
    order: ORDER,
    doneCount: DONE_AT_SNAPSHOT + all.filter(t => t.status === "Done").length,
    tasks: all.filter(t => t.status !== "Done")
  };
}

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*"
    }
  });

export default async (req) => {
  const url = new URL(req.url);
  const q = url.searchParams;

  if (req.method === "GET") {
    if (q.has("reset")) {
      if (KEY && q.get("reset") !== KEY) return json({ error: "Reset needs the key." }, 401);
      const backend = await writeEdits(fresh());
      return json({ ok: true, reset: true, backend, message: "Back to the snapshot. Edit a task in Notion to repopulate." });
    }

    const { data, backend } = await readEdits();

    if (q.has("debug")) {
      return json({
        backend,
        updatedAt: data.updatedAt,
        alias: data.alias || {},
        stored: Object.entries(data.tasks || {}).map(([k, t]) => ({
          storedAs: k, objective: t.objective, status: t.status, removed: !!t.removed
        }))
      });
    }

    /* The store that produced this answer travels with it, so the board and the
       diagnostics can never disagree about which instance served the request. */
    const feed = assemble(data);
    feed.storage = { backend, storedCount: Object.keys(data.tasks || {}).length, aliases: Object.keys(data.alias || {}).length };
    return json(feed);
  }

  if (req.method !== "POST") return json({ error: "GET to read, POST to update." }, 405);

  if (KEY && q.get("key") !== KEY) return json({ error: "Bad or missing key." }, 401);

  let body;
  try {
    body = await req.json();
  } catch (err) {
    return json({ error: "Body was not JSON." }, 400);
  }

  const page = body.data && body.data.object === "page" ? body.data : (body.page || body);
  const task = toTask(page);
  if (!task || !task.id) return json({ error: "No page with a title in that payload." }, 400);

  const { data: edits } = await readEdits();
  edits.tasks = edits.tasks || {};
  edits.alias = edits.alias || {};

  const seedIds = new Set(SEED.tasks.map(t => nid(t.id)));
  const seedByTitle = new Map(SEED.tasks.map(t => [key(t.objective), nid(t.id)]));

  let canonical = task.id;
  let matchedBy = "id";
  if (!seedIds.has(canonical) && !edits.tasks[canonical]) {
    if (edits.alias[canonical]) {
      canonical = nid(edits.alias[canonical]);
      matchedBy = "alias";
    } else {
      const twin = seedByTitle.get(key(task.objective));
      if (twin) {
        edits.alias[task.id] = twin;   // remember it, so a later rename still matches
        canonical = twin;
        matchedBy = "title";
      } else {
        matchedBy = "new";
      }
    }
  }

  edits.tasks[canonical] = { ...task, id: canonical };
  edits.updatedAt = new Date().toISOString();
  const backend = await writeEdits(edits);

  return json({
    ok: true, sentId: task.id, storedAs: canonical, matchedBy, backend,
    objective: task.objective, group: task.group
  });
};
