import type { PersonaFocusAreas, CompetitorQuestion, ObjectionResponse } from './types';

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
            'Structured fields for address, violation type, details, and photos so staff isn\'t chasing info across emails/voicemails/paper.',
        },
        {
          question: 'When something comes in, how do you log it and make sure it doesn\'t get lost?',
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
            '(Submitted → Open → Case Created → Closed) so everyone can instantly understand where each item stands and what\'s next.',
        },
      ],
    },
    PP2: {
      label: 'PP2',
      title: 'In-the-Field Experience',
      goal: 'Uncover double work.',
      qvpPairs: [
        {
          question: 'When you\'re in the field, how are you capturing photos and notes?',
          vpTitle: 'Mobile-friendly field inspections',
          vpDescription:
            'Log inspection outcomes and notes while on-site instead of writing in a notebook and updating later.',
        },
        {
          question: 'When you\'re scheduling inspections, what do you use to keep track of what you need to do each day?',
          vpTitle: 'Daily inspection queue & calendar integration',
          vpDescription:
            'Automatically schedule and route inspections to yourself and staff across systems and calendars.',
        },
        {
          question: 'Do you have to upload everything later when you\'re back at your desk?',
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
          question: 'When you\'re ready to send a notice, how do you generate it — template, copy/paste, from scratch?',
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
            'GovWell surfaces re-inspection due dates and next steps so cases don\'t go cold.',
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
            'GovWell gives you one place where every application goes, so nothing gets lost in email or paperwork.',
        },
        {
          question: 'Do applicants typically submit everything correctly the first time, or is it a lot of back-and-forth?',
          vpTitle: 'Guided applicant submissions',
          vpDescription:
            'GovWell helps people submit it right the first time with an AI-powered chatbot that lives on the portal to answer questions, plus a feature called AutoCheck that flags if anything is missing before they hit submit.',
        },
        {
          question: 'How do you communicate with applicants and let them know what they need to do?',
          vpTitle: 'Clear applicant communication',
          vpDescription:
            'GovWell makes it easy to tell applicants exactly what\'s missing and where to upload it, without long email chains.',
        },
        {
          question: 'Are you able to immediately attach permit applications to a specific workflow to keep the process moving?',
          vpTitle: 'Automatic workflow routing',
          vpDescription:
            'GovWell automatically puts each application into the right step-by-step process, so it keeps moving without someone having to sort it manually.',
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
            'GovWell routes plans to the right reviewers automatically and tracks who\'s reviewed, who\'s pending, and what\'s outstanding.',
        },
        {
          question: 'How do reviewers mark up or comment on plans?',
          vpTitle: 'Digital plan markup',
          vpDescription:
            'Reviewers can annotate directly in GovWell, keeping all comments in one place instead of scattered across emails.',
        },
        {
          question: 'When a plan needs to be resubmitted, how do you track what changed?',
          vpTitle: 'Version-tracked resubmittals',
          vpDescription:
            'Each resubmittal is logged so you can see what changed and whether all comments were addressed.',
        },
        {
          question: 'How do you know when a review is complete and it\'s ready to move forward?',
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
            'Contractors can request inspections through the portal and GovWell routes them automatically to the right inspector.',
        },
        {
          question: 'How do inspectors document results in the field?',
          vpTitle: 'Mobile inspection app',
          vpDescription:
            'Inspectors pass/fail, add notes, and attach photos on their phone — no clipboard or double-entry.',
        },
        {
          question: 'What happens when an inspection fails — how do you communicate that and schedule a re-inspection?',
          vpTitle: 'Instant correction notices',
          vpDescription:
            'GovWell auto-generates a correction notice and queues up the re-inspection automatically.',
        },
        {
          question: 'How do you track which permits are close to being finaled vs. stalled?',
          vpTitle: 'Permit status dashboard',
          vpDescription:
            'See exactly where every open permit stands so nothing sits uninspected or unclosed.',
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
            'AutoCheck AI reviews applications (and plans) up front and flags missing items before staff ever touch it—so fewer incomplete submissions and less back-and-forth.',
        },
        {
          question: 'Can you easily customize different application types—like adding fields, changing requirements, or adjusting the format?',
          vpTitle: 'Fully configurable applications',
          vpDescription:
            'In GovWell, you can edit the fields, rules, and layout for any planning application type—so your forms match your process (not the other way around).',
        },
        {
          question: 'How often do applicants ask, "Where does my application stand?"',
          vpTitle: 'Self-serve status updates',
          vpDescription:
            'Applicants can see what stage they\'re in and what\'s next, which cuts down on status calls and emails.',
        },
        {
          question: 'When something is missing or needs resubmittal, how do you track what\'s owed and by when?',
          vpTitle: 'Missing items + deadlines tracking',
          vpDescription:
            'Track what\'s outstanding and the next due date in one place, so resubmittals don\'t turn into email tag or guesswork.',
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
            'GovWell sends plans to all relevant departments simultaneously and tracks who\'s done, pending, or has comments.',
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
            'Applicants receive consolidated reviewer feedback directly in the portal—no email back-and-forth.',
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
          question: 'How do you track conditions of approval and ensure they\'re followed up on?',
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
        "GovWell includes digital plan review with markup tools natively — no add-on needed.",
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
];
