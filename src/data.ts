import type { PersonaFocusAreas, CompetitorQuestion, ObjectionResponse, ValuePropItem } from './types';

// ─── FUNCTIONALITY PAIN DATA ───────────────────────────────────────────────

export const functionalityData: Record<string, PersonaFocusAreas> = {
  'Code Enforcement Officer': {
    PP1: {
      label: 'PP1',
      title: 'Case Intake & Tracking',
      goal: 'Find out if complaints are coming in cleanly.',
      qvpPairs: [
        {
          question: 'How do complaints come in today — calls, email, online form, or in person?',
          vpTitle: 'Simple, resident-facing portal',
          vpDescription:
            "Structured fields for address, violation type, details, and photos so staff isn't chasing info across emails/voicemails/paper.",
        },
        {
          question: "When something comes in, how do you log it and make sure it doesn't get lost?",
          vpTitle: 'Clean complaint → case workflow',
          vpDescription:
            'Once a complaint comes in, GovWell drops it straight into a step-by-step workflow so your team can triage and resolve it fast — no manual sorting.',
        },
        {
          question: 'How do residents submit photos or details online? Do you sometimes have to chase info?',
          vpTitle: 'Centralized case records',
          vpDescription:
            'GovWell is a system of record that holds the full history: inspections, communications, documents, photos/files, and key property details. Nothing gets lost between staff members or shifts.',
        },
        {
          question: 'On a busy week, how do you decide what gets handled first?',
          vpTitle: 'Standardized statuses',
          vpDescription:
            "(Submitted → Open → Case Created → Closed) so everyone can instantly understand where each item stands and what's next.",
        },
      ],
    },
    PP2: {
      label: 'PP2',
      title: 'In-the-Field Experience',
      goal: 'Uncover double work.',
      qvpPairs: [
        {
          question: "When you're in the field, how are you capturing photos and notes?",
          vpTitle: 'Mobile-friendly field inspections',
          vpDescription:
            'Log inspection outcomes and notes while on-site instead of writing in a notebook and updating later.',
        },
        {
          question: "When you're scheduling inspections, what do you use to keep track of what you need to do each day?",
          vpTitle: 'Daily inspection queue & calendar integration',
          vpDescription:
            'Automatically schedule and route inspections to yourself and staff across systems and calendars.',
        },
        {
          question: "Do you have to upload everything later when you're back at your desk?",
          vpTitle: 'Photo documentation in the workflow',
          vpDescription:
            'Capture/upload photos tied to the complaint / case for evidence and communication.',
        },
        {
          question: 'If you revisit a property, can you pull the full history from the field — or do you have to wait until you\'re back in the office?',
          vpTitle: 'Full property history on-site',
          vpDescription:
            'Address-centric "one source of truth" case record so officers can pull up everything they need in the field.',
        },
      ],
    },
    PP3: {
      label: 'PP3',
      title: 'Case Follow-through & Resolution',
      goal: 'Uncover where cases stall.',
      qvpPairs: [
        {
          question: "When you're ready to send a notice, how do you generate it — template, copy/paste, from scratch?",
          vpTitle: 'Automatic notice generation',
          vpDescription:
            'GovWell generates notices from violation-type templates with property, owner, and codebook info auto-filled.',
        },
        {
          question: 'How do you reference your code book when writing violations? Is it challenging to attach codes to cases?',
          vpTitle: 'Inline code reference',
          vpDescription:
            'Officers search and attach municipal codes directly inside the case record without switching tools.',
        },
        {
          question: 'How do you keep track of when a case needs a re-inspection or next step?',
          vpTitle: 'Automated follow-up prompts',
          vpDescription:
            "GovWell surfaces re-inspection due dates and next steps so cases don't go cold.",
        },
        {
          question: 'If a case ends up going to court, how do you pull together everything you need — timeline, photos, notices, and notes?',
          vpTitle: 'Court-ready case file',
          vpDescription:
            'Build a defensible case file automatically. Standardized workflow and case history proves consistent due process.',
        },
      ],
    },
  },

  'Building Official': {
    PP1: {
      label: 'PP1',
      title: 'Permit Applications & Intake',
      goal: 'Uncover how permit applications are received, validated, and routed into workflows.',
      qvpPairs: [
        {
          question: 'How are permit applications coming in today — online, email, paper, or a mix?',
          vpTitle: 'Centralized application intake',
          vpDescription:
            'GovWell gives you one place where every application goes right on the website, so nothing gets lost in email or paperwork.',
        },
        {
          question: 'Do applicants typically submit everything correctly the first time, or is it a lot of back-and-forth?',
          vpTitle: 'Guided applicant submissions',
          vpDescription:
            'GovWell helps people submit it right the first time with an AI-powered chatbot that lives on the portal to answer questions. AICA, as we call it, will allow residents to ask questions like "how do I build a shed" and get direct answers. Plus we have a feature called AutoCheck that cross-references plan sets with your code and flags any problems before applicants submit.',
        },
        {
          question: 'How do you communicate with applicants and let them know what they need to do?',
          vpTitle: 'Clear applicant communication',
          vpDescription:
            "GovWell makes it easy to tell applicants exactly what's missing and where to upload it, without long email chains.",
        },
        {
          question: 'Are you able to immediately attach permit applications to a specific workflow to keep the process moving?',
          vpTitle: 'Automatic workflow routing',
          vpDescription:
            "GovWell automatically puts each application into the right step-by-step process, so it keeps moving without someone having to sort it manually.",
        },
      ],
    },
    PP2: {
      label: 'PP2',
      title: 'Plan Review & Collaboration',
      goal: 'Find out how plan review is coordinated across departments and reviewers.',
      qvpPairs: [
        {
          question: 'How do you coordinate plan review across multiple departments or reviewers?',
          vpTitle: 'Multi-department review routing',
          vpDescription:
            "GovWell routes plans to the right reviewers automatically and tracks who's reviewed, who's pending, and what's outstanding.",
        },
        {
          question: 'How do reviewers mark up or comment on plans?',
          vpTitle: 'Digital plan markup',
          vpDescription:
            'The applicant gets notified, fixes the issues, and uploads the new version right back into the same case. Everything stays attached to the permit record, so nothing gets lost in email, and everything is easily searchable in the system.',
        },
        {
          question: 'When a plan needs to be resubmitted, how do you track what changed?',
          vpTitle: 'Version-tracked resubmittals',
          vpDescription:
            'You can quickly tell what changed between the old set and the new set. There is a button that allows you to toggle between the two versions and overlay the old set with the new to see changes. Staff always knows which plan and version is current.',
        },
        {
          question: "How do you know when a review is complete and it's ready to move forward?",
          vpTitle: 'Approval status tracking',
          vpDescription:
            'GovWell shows you exactly which reviewers have signed off so nothing advances prematurely.',
        },
      ],
    },
    PP3: {
      label: 'PP3',
      title: 'Inspections & Close-out',
      goal: 'Find out how inspections are scheduled and how projects get finaled.',
      qvpPairs: [
        {
          question: 'How do contractors request inspections, and how do you schedule them?',
          vpTitle: 'Self-serve inspection scheduling',
          vpDescription:
            "Scheduling is simple. Staff and applicants request and book inspections in one place online, and appointments automatically populate to GovWell's mobile app. When in the field you can schedule further inspections or re-inspections and they automatically sync with your calendar.",
        },
        {
          question: 'How do inspectors document results in the field?',
          vpTitle: 'Correction & reinspection tracking',
          vpDescription:
            "GovWell has a mobile app that allows you to easily record notes and photos right on the inspection, so everything ends up automatically saved to the permit record and can be input right as it's happening — not when you go back to the office.",
        },
        {
          question: 'What happens when an inspection fails — how do you communicate that and schedule a re-inspection?',
          vpTitle: 'Instant correction notices',
          vpDescription:
            "The system keeps failed inspections moving with clear correction tracking and an easy path to schedule the reinspection, so issues don't fall through the cracks.",
        },
        {
          question: 'How do you track which permits are close to being finaled vs. stalled?',
          vpTitle: 'Applicant self-serve portal',
          vpDescription:
            "GovWell gives applicants a self-serve portal to check permit and inspection status anytime, which cuts down on 'can you give me an update?' calls.",
        },
      ],
    },
  },

  'Planner': {
    PP1: {
      label: 'PP1',
      title: 'Application Intake & Communication',
      goal: 'Uncover how applications are received and how applicant communication breaks down.',
      qvpPairs: [
        {
          question: 'When someone submits an application, how often is stuff missing?',
          vpTitle: 'AutoCheck AI pre-screens submissions',
          vpDescription:
            'AutoCheck AI reviews applications (and plans) up front and flags missing items before staff ever touch it — so fewer incomplete submissions and less back-and-forth.',
        },
        {
          question: 'Can you easily customize different application types — like adding fields, changing requirements, or adjusting the format?',
          vpTitle: 'Fully configurable applications',
          vpDescription:
            'In GovWell, you can edit the fields, rules, and layout for any planning application type — so your forms match your process (not the other way around).',
        },
        {
          question: 'How often do applicants ask, "Where does my application stand?"',
          vpTitle: 'Self-serve status updates',
          vpDescription:
            "Applicants can see what stage they're in and what's next, which cuts down on status calls and emails.",
        },
        {
          question: "When something is missing or needs resubmittal, how do you track what's owed and by when?",
          vpTitle: 'Missing items + deadlines tracking',
          vpDescription:
            "Track what's outstanding and the next due date in one place, so resubmittals don't turn into email tag or guesswork.",
        },
      ],
    },
    PP2: {
      label: 'PP2',
      title: 'Plan Review & Resubmittals',
      goal: 'Find out how plan review cycles and resubmittals are managed.',
      qvpPairs: [
        {
          question: 'How do you coordinate review across multiple departments?',
          vpTitle: 'Parallel review routing',
          vpDescription:
            "GovWell sends plans to all relevant departments simultaneously and tracks who's done, pending, or has comments.",
        },
        {
          question: 'When an applicant resubmits, how do you compare the new version to the old?',
          vpTitle: 'Version-by-version comparison',
          vpDescription:
            'GovWell logs each submittal so reviewers can see what changed and whether prior comments were addressed.',
        },
        {
          question: 'How do you communicate markup and comments back to applicants?',
          vpTitle: 'In-portal comment delivery',
          vpDescription:
            'Applicants receive consolidated reviewer feedback directly in the portal — no email back-and-forth.',
        },
        {
          question: 'How many rounds of resubmittal does a typical project go through?',
          vpTitle: 'Fewer resubmittal cycles',
          vpDescription:
            'AutoCheck AI catches missing items upfront, which reduces incomplete submittals and reviewer back-and-forth.',
        },
      ],
    },
    PP3: {
      label: 'PP3',
      title: 'Meeting Prep & Coordination',
      goal: 'Find out how meetings (hearings, pre-apps, etc.) are organized and prepped for.',
      qvpPairs: [
        {
          question: 'How do you prepare staff reports and agenda packets for hearings?',
          vpTitle: 'Auto-generated staff reports',
          vpDescription:
            'GovWell pulls application details, review history, and conditions directly into a structured staff report template.',
        },
        {
          question: "How do you track conditions of approval and ensure they're followed up on?",
          vpTitle: 'Conditions tracking',
          vpDescription:
            'Every condition is tracked in the system with due dates and responsibility, so nothing slips through post-approval.',
        },
        {
          question: 'How do applicants find out about hearing dates and outcomes?',
          vpTitle: 'Automated notifications',
          vpDescription:
            'GovWell notifies applicants of scheduled hearings and decision outcomes automatically.',
        },
        {
          question: 'How do you coordinate pre-application meetings or intake consultations?',
          vpTitle: 'Integrated scheduling',
          vpDescription:
            'Pre-app meetings can be requested and scheduled directly through the GovWell portal.',
        },
      ],
    },
  },
};

// ─── COMPETITOR DISCOVERY DATA ─────────────────────────────────────────────

export const competitorData: Record<string, CompetitorQuestion[]> = {
  Accela: [
    {
      question: 'What does customer support look like?',
      whatWeHeard:
        "We've heard weeks-long ticket resolution — or just being directed to the Accela help website to figure it out yourself.",
      govwellValueProp:
        "GovWell has an in-house deployment team, a dedicated deployment strategist who trains you on every updated feature, and a chatbot with under 2-minute response times for customer questions.",
    },
    {
      question: 'Can you use Accela in the field?',
      whatWeHeard:
        "We've heard that Accela's mobile experience is often clunky or requires workarounds for field use.",
      govwellValueProp:
        "GovWell's mobile app is purpose-built for field work — log inspections, photos, and case notes on your phone without double-entry.",
    },
    {
      question: 'Does Accela seamlessly notify applicants of comments, resubmittals, or staff changes?',
      whatWeHeard:
        "We've heard automated notifications are limited or require significant configuration.",
      govwellValueProp:
        "GovWell automatically notifies applicants when comments are added, resubmittals are needed, or their case is reassigned — no manual outreach needed.",
    },
    {
      question: 'Are you able to seamlessly pull reports?',
      whatWeHeard:
        "We've heard reporting in Accela requires custom development or technical staff, making it hard for everyday users to pull data.",
      govwellValueProp:
        "GovWell has built-in reporting and dashboards that any staff member can use without needing IT support.",
    },
    {
      question: 'Do residents have any problems with the public-facing portal?',
      whatWeHeard:
        "We've heard the public portal can be confusing to navigate, leading to incomplete submissions and frustrated applicants.",
      govwellValueProp:
        "GovWell's resident portal is designed for simplicity — guided submissions with AutoCheck AI that flags missing items before the applicant even hits submit.",
    },
    {
      question: 'Is Accela easy to use?',
      whatWeHeard:
        "We've heard Accela has a steep learning curve and that new staff often need significant training before they're productive.",
      govwellValueProp:
        "GovWell is built for everyday government staff — most users are self-sufficient within a few days of onboarding.",
    },
  ],

  BSA: [
    {
      question: 'Do you feel like BSA is built for permitting and inspection workflows?',
      whatWeHeard:
        "We've heard that because BSA is primarily a finance program, it doesn't have the functionality that building departments, building officials, planners, and permit techs need.",
      govwellValueProp:
        "GovWell is built specifically for permitting workflows — everything from submission, to plan review, inspection features, and communication with applicants. Built for purpose for building departments.",
    },
    {
      question: 'How is the BSA online permitting portal working for residents?',
      whatWeHeard:
        "We've heard it can be quite clunky, even described as 'impenetrable' by residents trying to submit.",
      govwellValueProp:
        "GovWell's resident portal is designed to be approachable and clear — guided submissions with AutoCheck AI that catches missing items before applicants hit submit.",
    },
    {
      question: 'Do you feel like it\'s easy to use?',
      whatWeHeard:
        "We've heard it's a lot of clicking, takes too many steps, and doesn't allow you to move easily from area to area when processing.",
      govwellValueProp:
        "GovWell is intuitive and customizable — if you want to adjust it to match how your team works, it's easy to do that.",
    },
    {
      question: 'Do you still do things by hand?',
      whatWeHeard:
        "We've heard that BSA doesn't allow you to fully go digital, which ends up making the job harder.",
      govwellValueProp:
        "GovWell has a well-connected front and back end that speak to each other, so you can fully digitize your workflows.",
    },
    {
      question: "Do you feel like it's built for planning and zoning?",
      whatWeHeard:
        "We've heard that it doesn't work well for planners, or people who do zoning or need to review plan sets.",
      govwellValueProp:
        "GovWell has built-in plan review and supports the full planning workflow, including notifications throughout the planning meeting process.",
    },
  ],

  CitizenServe: [
    {
      question: 'How does user licensing work, especially when other departments, boards, or outside reviewers need access?',
      whatWeHeard:
        "We've heard CitizenServe's per-user licensing gets expensive fast, which leads to shared logins or people being left out of the system.",
      govwellValueProp:
        "GovWell is designed so you can include everyone who needs to touch the process without the 'we can't afford another seat' problem slowing things down.",
    },
    {
      question: 'How is the public portal experience for residents and contractors?',
      whatWeHeard:
        "We've heard CitizenServe's portal can be hard for residents to use, and it can require cumbersome sign-ups and support calls just to submit the right thing.",
      govwellValueProp:
        "GovWell gives applicants a modern self-serve portal plus an AI chatbot on the portal to answer common questions in the moment, so fewer applications come in broken.",
    },
    {
      question: 'How are you handling plan review today?',
      whatWeHeard:
        "We've heard CitizenServe often forces a download → markup elsewhere → re-upload workflow because plan review tools in the system are limited.",
      govwellValueProp:
        "GovWell has integrated electronic plan review, so reviewers can collaborate in the same place and stay on the right version.",
    },
    {
      question: 'When you need reporting on activity, workloads, status, or trends, how easy is it to get what you need?',
      whatWeHeard:
        "We've heard CitizenServe reporting can be limited, and some cities have to ask CitizenServe to generate reports for them.",
      govwellValueProp:
        "GovWell makes it easy to pull reliable, configurable reports so you can answer 'what's open, what's stuck, what's next' without workarounds.",
    },
    {
      question: 'How does CitizenServe handle integrations with finance systems, GIS, or other city tools?',
      whatWeHeard:
        "We've heard CitizenServe can struggle with integrations, leading to manual data transfers between systems.",
      govwellValueProp:
        "GovWell is built to be the system of record for these workflows, reducing duplicate entry and keeping everything tied to the record.",
    },
    {
      question: "How's document handling day-to-day — finding things, reviewing things, sharing things?",
      whatWeHeard:
        "We've heard CitizenServe can be cumbersome for documents, including having to download files repeatedly, making it harder to stay organized.",
      govwellValueProp:
        "GovWell keeps files and communications attached to the record, so staff aren't hunting through email threads or local folders.",
    },
  ],

  CloudPermit: [
    {
      question: "How's the customer support?",
      whatWeHeard:
        "We've heard people get left waiting for months when they have issues.",
      govwellValueProp:
        "GovWell has a dedicated deployment strategist and a live customer support portal that responds to questions usually in under 2 minutes.",
    },
    {
      question: 'When you want to change something in the system, are you able to do that easily?',
      whatWeHeard:
        "We've heard that CloudPermit isn't very changeable after you set it up, and that you can't easily change things on the backend.",
      govwellValueProp:
        "GovWell is far more configurable. If your ordinance changes, or residents keep getting confused by a question on the application, or if you want a different step order or approval path, you can update it yourself and move on.",
    },
    {
      question: "How's billing and invoicing working for you?",
      whatWeHeard:
        "We've heard complaints from people who switched over that payment processing for permit applications isn't working well.",
      govwellValueProp:
        "GovWell has built-in, proven online payments and clean transaction reporting, so permits don't get held up by payment glitches or messy reconciliation.",
    },
    {
      question: "How's the reporting in CloudPermit?",
      whatWeHeard:
        "We've heard that when people try to pull data from CloudPermit it can sometimes be missing crucial information.",
      govwellValueProp:
        "GovWell has a reliable reporting feature that can be fully custom configured.",
    },
    {
      question: 'Can you use CloudPermit on the go?',
      whatWeHeard:
        "We've heard that CloudPermit doesn't work well on mobile.",
      govwellValueProp:
        "GovWell has a mobile app designed with all the features and functionality you need in the field.",
    },
  ],

  eTrackit: [
    {
      question: "How's customer support been when something breaks or you need help?",
      whatWeHeard:
        "We've heard eTrackit / Central Square support can be really unresponsive, with tickets staying open for months.",
      govwellValueProp:
        "GovWell has fast, live customer support with a response time of under 2 minutes.",
    },
    {
      question: "Have you lost functionality or been pushed into upgrades or migrations you didn't ask for?",
      whatWeHeard:
        "We've heard Central Square has stopped supporting key features — especially the mobile and field app — and pushed cities toward more expensive platforms.",
      govwellValueProp:
        "GovWell is a modern platform that keeps improving without taking features away. We also have a continuous deployment model, which means someone is alongside you for the ride.",
    },
    {
      question: "How's the usability for staff and the public?",
      whatWeHeard:
        "We've heard the UI can feel outdated and clunky, and painful for both staff and residents to use.",
      govwellValueProp:
        "GovWell is designed to be modern and intuitive, which cuts down training time and 'how do I do this?' calls from residents. Plus, we have an AI-powered chatbot called AICA that lives on top of the system to help answer questions.",
    },
    {
      question: 'Do workflows feel streamlined, or is it a lot of clicks and manual cleanup?',
      whatWeHeard:
        "We've heard eTrackit workflows can be clunky, with too many steps and staff having to manually fix missing info like address and valuation fields.",
      govwellValueProp:
        "GovWell is built to keep work moving through clear steps, with fewer handoffs and less manual chasing.",
    },
    {
      question: 'How well does it connect to the rest of your systems — records, finance, GIS, public records?',
      whatWeHeard:
        "We've heard integrations can be fragile, and that updates can break links — forcing manual workarounds and juggling multiple systems.",
      govwellValueProp:
        "GovWell is built to be the system of record for the process — everything is present all in one system.",
    },
  ],

  GeoCivix: [
    {
      question: 'Do residents find it easy to use?',
      whatWeHeard:
        "We've heard applicants have to click through a lot of pages, and customers who switched over said they spent a lot of time walking citizens through how to use it.",
      govwellValueProp:
        "GovWell gives applicants a guided, modern portal that's easy to navigate from day one — no hand-holding required.",
    },
    {
      question: 'Does it feel modern and intuitive?',
      whatWeHeard:
        "We've heard it has a really outdated look and legacy UI.",
      govwellValueProp:
        "GovWell is built with a clean, modern interface for both staff and residents — most users get up to speed quickly without extensive training.",
    },
  ],

  GeoPermits: [
    {
      question: "How's customer support when you need help?",
      whatWeHeard:
        "We've heard GeoPermits support can be slow and unresponsive, with tickets feeling like they disappear for weeks or months.",
      govwellValueProp:
        "GovWell has fast, live customer support with a response time of under 2 minutes.",
    },
    {
      question: 'When you need to change forms or workflows, can you do it yourself?',
      whatWeHeard:
        "We've heard GeoPermits customers can't make simple changes without vendor involvement, which creates delays when ordinances or processes change.",
      govwellValueProp:
        "GovWell is far more configurable. If your ordinance changes, or residents keep getting confused by a question on the application, or if you want a different step order or approval path, you can update it yourself and move on.",
    },
    {
      question: 'How do residents and contractors feel about the portal?',
      whatWeHeard:
        "We've heard GeoPermits' public portal can be confusing, which drives support calls and incomplete submissions.",
      govwellValueProp:
        "GovWell gives applicants a modern self-serve portal plus an AI chatbot on the portal to answer common questions in the moment, so fewer applications come in broken.",
    },
    {
      question: "How's reporting — can you get the data you need without workarounds?",
      whatWeHeard:
        "We've heard GeoPermits reporting is limited, and teams end up exporting to Excel and doing manual work.",
      govwellValueProp:
        "GovWell has reliable reporting so you can quickly answer what's open, what's stuck, and what's next.",
    },
    {
      question: 'Can inspectors and staff use it effectively in the field?',
      whatWeHeard:
        "We've heard GeoPermits is not great on mobile, so staff end up taking notes and entering them back at their desk.",
      govwellValueProp:
        "GovWell has a mobile app designed with all the features and functionality you need in the field.",
    },
  ],

  iWorq: [
    {
      question: 'When you want to make changes — fees, forms, letter templates, time slots — how does that work?',
      whatWeHeard:
        "We've heard you have to reach out to iWorq for any tiny modification or change — even something as simple as updating a fee or editing a template.",
      govwellValueProp:
        "With GovWell, you can update fees, forms, letter templates, and any workflows yourself — no need to contact the vendor or wait on a support ticket.",
    },
    {
      question: 'Is your data accessible? Can you easily pull information into a report?',
      whatWeHeard:
        "We've heard that pulling custom reports from iWorq requires contacting support or using canned reports that don't always match what you need.",
      govwellValueProp:
        "GovWell has built-in reporting and dashboards any staff member can use — filter, export, and share data without needing IT.",
    },
    {
      question: 'How does the inspection workflow work for you in iWorq?',
      whatWeHeard:
        "We've heard the inspection workflow can feel rigid and that mobile functionality is limited.",
      govwellValueProp:
        "GovWell's mobile inspection app lets officers log outcomes, notes, and photos in the field — no back-office follow-up required.",
    },
    {
      question: 'How does payment processing work in iWorq?',
      whatWeHeard:
        "We've heard payment processing can be clunky or require separate tools.",
      govwellValueProp:
        "GovWell has integrated online payments so applicants can pay permits and fees directly through the portal — no third-party required.",
    },
    {
      question: 'How does training and onboarding work with iWorq?',
      whatWeHeard:
        "We've heard onboarding can feel rushed, and ongoing training when features change is limited.",
      govwellValueProp:
        "GovWell provides a dedicated deployment strategist who trains your team on every feature update — not just at launch.",
    },
  ],

  MGO: [
    {
      question: 'When you need to make changes in the system, how long does it usually take?',
      whatWeHeard:
        "We've heard MGO is not very customizable, and changes can take weeks or months.",
      govwellValueProp:
        "GovWell is far more configurable. If your ordinance changes, or residents keep getting confused by a question on the application, or if you want a different step order or approval path, you can update it yourself and move on.",
    },
    {
      question: "How's support responsiveness when something breaks or you need help?",
      whatWeHeard:
        "We've heard MGO support has declined significantly and can be slow to respond.",
      govwellValueProp:
        "GovWell has fast, live customer support with a response time of under 2 minutes.",
    },
    {
      question: "How's reporting — can you pull what you need without it being a headache?",
      whatWeHeard:
        "We've heard reporting in MGO can be frustrating and unreliable.",
      govwellValueProp:
        "GovWell has reliable, configurable reporting so you can answer basic questions fast without workarounds.",
    },
    {
      question: 'How easy is it to find things in the system — permits, notes, history, attachments?',
      whatWeHeard:
        "We've heard MGO can be hard to navigate when you're trying to find specific records.",
      govwellValueProp:
        "GovWell is built as a system of record, so everything stays attached to the case and is easy to track down.",
    },
    {
      question: 'How do you handle applicant communication and plan review comments today?',
      whatWeHeard:
        "We've heard MGO users end up manually compiling comments and sending them to the applicant — and they really like GovWell's plan review in comparison.",
      govwellValueProp:
        "GovWell has built-in plan review, so comments and revisions stay in one place and don't turn into an email scavenger hunt.",
    },
  ],

  Municity: [
    {
      question: "How often do you find yourself saying 'we need the system to do X'... and it just can't?",
      whatWeHeard:
        "We've heard: 'Municity is pretty basic. It doesn't have a lot of the features we need for our operations.'",
      govwellValueProp:
        "GovWell is built as a full modern workflow system, so you're not stuck trying to run real processes on top of a basic tool.",
    },
    {
      question: "For staff and applicants, what's the day-to-day experience like? Does the interface feel intuitive, or do people avoid it?",
      whatWeHeard:
        "We've heard: 'The interface feels outdated. It's not intuitive for our staff or for residents trying to submit applications.'",
      govwellValueProp:
        "GovWell is designed to be modern and straightforward for both staff and the public, which reduces confusion and the 'can you help me submit this?' calls.",
    },
    {
      question: 'When your inspectors are in the field, can they actually get work done on their phone or tablet?',
      whatWeHeard:
        "We've heard: 'There's no good mobile solution with Municity. Our inspectors can't work effectively in the field.'",
      govwellValueProp:
        "GovWell supports real field work, so inspectors can stay productive without doing everything twice — once in the field and then again back at a desk.",
    },
    {
      question: 'When you need a report for council or management, can you pull it quickly, or does it turn into an Excel project?',
      whatWeHeard:
        "We've heard: 'The reporting in Municity doesn't give us what we need. We have to export and manipulate data manually.'",
      govwellValueProp:
        "GovWell has reliable, configurable reporting so you can answer 'what's open, what's stuck, and what's next' — no Excel project required.",
    },
  ],

  Munis: [
    {
      question: 'How well does Munis integrate with the other systems you rely on?',
      whatWeHeard:
        "We've heard Munis is a closed ecosystem with limited third-party integration, forcing manual CSV exports/imports and extra reconciliation work.",
      govwellValueProp:
        "GovWell works with the other tools your city already uses, so you don't get boxed into one vendor.",
    },
    {
      question: "Do you feel like you're 'stuck' with Munis because finance chose it?",
      whatWeHeard:
        "We've heard departments get locked in because finance wants to stay on Munis, even if other teams feel it's holding them back.",
      govwellValueProp:
        "GovWell works with finance realities and helps teams move forward without creating a civil war between departments.",
    },
    {
      question: "How's reporting in Munis when you need audit-ready answers?",
      whatWeHeard:
        "We've heard some teams say Munis reports are inaccurate or hard to trust, which drives duplicate tracking in spreadsheets.",
      govwellValueProp:
        "GovWell gives clean, exportable transaction and activity reporting so you're not maintaining multiple 'shadow books.'",
    },
    {
      question: 'If you ever needed to migrate or pull your data out, how confident do you feel?',
      whatWeHeard:
        "We've heard data migration out of Munis feels uncertain and painful, and teams worry about what will or won't come over.",
      govwellValueProp:
        "GovWell takes a migration-first approach with structured data and a clear path to get information in (and out) without drama.",
    },
    {
      question: "How's the user experience for people outside finance who have to touch Munis?",
      whatWeHeard:
        "We've heard Munis is described as clunky and frustrating for non-finance users, with an older UI style.",
      govwellValueProp:
        "GovWell is built for purpose for building officials and plan tech reviewers, so cross-department staff can use it without needing a finance background.",
    },
  ],

  TylerEnerGov: [
    {
      question: 'When you need to change something in your process, can your team make that change yourselves?',
      whatWeHeard:
        "We've heard EnerGov teams feel locked into configurations and have to burn staff time going back-and-forth with Tyler for adjustments they cannot self-serve.",
      govwellValueProp:
        "GovWell is built for self-serve configurability, so staff can update forms, workflows, and messaging without waiting on a vendor queue.",
    },
    {
      question: 'How did implementation go, and did you actually get fully live on the timeline you expected?',
      whatWeHeard:
        "We've heard cities spend years trying to implement EnerGov, with changing project managers and long delays, and some never feel confident going live.",
      govwellValueProp:
        "GovWell is designed to get you live faster with a clearer, more hands-on rollout, so you're not stuck in 'test mode' forever.",
    },
    {
      question: "How's the day-to-day user experience for staff, especially for simple tasks?",
      whatWeHeard:
        "We've heard EnerGov is described as clunky and not intuitive, with an 'older system' feel.",
      govwellValueProp:
        "GovWell focuses on modern, straightforward workflows so common actions take fewer steps and new staff ramp faster.",
    },
    {
      question: "How's reporting and pulling the data you need for leadership and the public?",
      whatWeHeard:
        "We've heard reporting is clunky and staff can't easily pull the exact data they want without preset searches or exports.",
      govwellValueProp:
        "GovWell provides built-in, flexible reporting so teams can answer 'what's happening in our pipeline' without living in Excel.",
    },
    {
      question: 'Do different departments (building, planning, code, finance) feel connected in the system?',
      whatWeHeard:
        "We've heard EnerGov modules can feel siloed, and information doesn't flow cleanly across departments.",
      govwellValueProp:
        "GovWell is designed as one connected platform, so statuses, payments, and records stay aligned across teams.",
    },
  ],

  OpenGov: [
    {
      question: 'What happens when you want to make changes to the system?',
      whatWeHeard:
        "We've heard changes to forms, workflows, or fees often require going back to OpenGov — you can't do it yourself.",
      govwellValueProp:
        "In GovWell, your admin can update fees, forms, letter templates, and workflows without needing to file a support ticket.",
    },
    {
      question: 'Are you able to do digital plan review in the system?',
      whatWeHeard:
        "We've heard digital plan review is either unavailable or requires a separate paid module.",
      govwellValueProp:
        "GovWell includes digital plan review with markup tools natively — no add-on needed. We also offer AI AutoCheck, which automatically identifies problems in plan sets and flags them to both residents and staff before review even begins.",
    },
    {
      question: 'Have you found OpenGov easy to use?',
      whatWeHeard:
        "We've heard there's a learning curve, especially for staff who aren't particularly tech-savvy.",
      govwellValueProp:
        "GovWell is built to be intuitive — we hear from customers regularly that new staff get up to speed in days, not weeks.",
    },
    {
      question: 'Do record types talk to each other?',
      whatWeHeard:
        "We've heard that permits, inspections, and code enforcement cases can feel siloed — data doesn't automatically flow between them.",
      govwellValueProp:
        "GovWell connects permits, inspections, violations, and property history in one unified record so there's no re-keying or switching between modules.",
    },
    {
      question: 'How does support work?',
      whatWeHeard:
        "We've heard support can be slow, with responses that redirect to documentation rather than solving the problem directly.",
      govwellValueProp:
        "GovWell provides a dedicated deployment strategist plus a support chatbot with under 2-minute response times.",
    },
  ],
};

// ─── OBJECTION HOT BAR DATA ────────────────────────────────────────────────

export const objectionData: ObjectionResponse[] = [
  {
    label: "We're too small",
    lines: [
      "We hear that a lot.",
      "We actually specialize in smaller communities and we're priced accordingly.",
    ],
  },
  {
    label: 'No budget',
    lines: [
      "That makes sense — when does your budget season usually happen?",
      "I'd love to get you a ballpark quote before budget season so you have numbers in hand.",
    ],
  },
  {
    label: 'Volume is low',
    lines: [
      "That's totally fine — our pricing scales with volume, so it won't cost you what you'd expect.",
    ],
  },
  {
    label: "We're happy with what we have",
    lines: [
      "I'm glad to hear that.",
      "Quick question: what do you still have to do outside your system? If you could wave a wand, what do you wish it did?",
    ],
  },
  {
    label: 'Just send me an email',
    lines: [
      "Happy to — what would you be most interested in reading about?",
      "Our system is really customizable, so it's usually best if I ask 1–2 quick questions first, then I'll send something tailored instead of generic.",
    ],
  },
  {
    label: 'No time',
    lines: [
      "Totally understandable — switching systems can feel like a big lift.",
      "That's why we provide a dedicated deployment strategist and handle setup/data migration so it's not on your plate.",
    ],
  },
  {
    label: "We'll need to do an RFP",
    lines: [
      "Totally makes sense.",
      "We usually like to connect before an RFP goes out — just to ask a few questions and make sure we're a good fit. That way if we do submit, it's actually tailored to what you need.",
    ],
  },
];

// ─── VALUE PROP HOT BAR DATA ───────────────────────────────────────────────

export const valuePropData: ValuePropItem[] = [
  {
    buttonLabel: 'Customer service',
    popupTitle: 'Customer service',
    description: 'If something breaks or you have a question, you get live support fast. Most teams get a response in under 2 minutes.',
  },
  {
    buttonLabel: 'AICA',
    popupTitle: 'AICA — AI chatbot on the public portal',
    description: "Residents can ask questions right on the portal, like 'How do I build a shed?' and get clear answers before they submit.",
  },
  {
    buttonLabel: 'Plan review',
    popupTitle: 'Built-in plan review',
    description: 'Reviewers can mark up and collaborate in one place, without the download-and-reupload mess.',
  },
  {
    buttonLabel: 'AutoCheck',
    popupTitle: 'AutoCheck — catch issues before submission',
    description: 'AutoCheck flags missing items and likely issues up front, so fewer applications come in broken.',
  },
  {
    buttonLabel: 'Custom reports',
    popupTitle: 'Customizable, reliable reports',
    description: "You can pull the reports you need without exporting to spreadsheets or asking the vendor to do it.",
  },
  {
    buttonLabel: 'Integrations',
    popupTitle: 'Integrations — plays nice with your stack',
    description: "GovWell connects with the tools you already use, so you can modernize without getting locked into one vendor.",
  },
  {
    buttonLabel: 'Complex approvals',
    popupTitle: 'Handles complex approval processes',
    description: "It supports multi-reviewer, non-linear workflows. You can see who's holding things up and keep approvals moving.",
  },
  {
    buttonLabel: 'System of record',
    popupTitle: 'One place for everything — system of record',
    description: "Everything stays attached to the case, so nothing gets lost in email.",
  },
  {
    buttonLabel: 'Plan versioning',
    popupTitle: 'Version control + plan comparisons',
    description: "You can compare plan versions and see what changed, so staff always knows what's current.",
  },
  {
    buttonLabel: 'Applicant self-serve',
    popupTitle: 'Applicant self-serve status updates',
    description: "Applicants can check status anytime, which cuts down on 'can you give me an update?' calls.",
  },
  {
    buttonLabel: 'Mobile app',
    popupTitle: 'Mobile field app',
    description: "Inspectors can capture notes and photos in the field, and it's immediately on the record.",
  },
  {
    buttonLabel: 'Inspection scheduling',
    popupTitle: 'Inspection scheduling + calendar sync',
    description: "Scheduling is simple, and appointments can sync to calendars so people aren't double-booking or chasing updates.",
  },
  {
    buttonLabel: 'Correction tracking',
    popupTitle: 'Correction + reinspection tracking',
    description: "Failed inspections don't fall through the cracks. The system guides corrections and reinspections.",
  },
  {
    buttonLabel: 'Online payments',
    popupTitle: 'Built-in online payments + clean transaction reporting',
    description: "Payments are built in, and reporting is clean, so you're not untangling payment issues later.",
  },
  {
    buttonLabel: 'Self-serve config',
    popupTitle: 'Self-serve configurability',
    description: "If your ordinance changes or a form question is confusing, you can update wording and workflow yourself without a vendor ticket.",
  },
];
