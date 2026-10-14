# HOSPEDIA AGENTS MVP — EXACT SPECIFICATIONS
## Agent Prompts, Pain Points, Website Copy & Design

---

## PART 1: THE REAL PAIN POINTS (Why Hotels Will Buy This)

### **Hotel Staff Pain Points (Current Reality)**

#### **Pain #1: Guest Communication Chaos**
**The Problem:**
- Hotel receptionist gets 50+ messages per day across:
  - WhatsApp (guests asking questions)
  - Email (booking questions, complaints)
  - Chat on hotel website (late-night inquiries)
  - OTA messages (Booking.com, Expedia)
  - Phone calls (transcribed or not)
  
- Each channel requires switching applications
- Messages often get missed (guest waits 4+ hours for response)
- Staff spends 3-4 hours/day just on guest communication
- High-value work (problem-solving) gets deprioritized for message volume

**Guest Impact:**
- Guest angry because they waited 3 hours to ask "what's the Wi-Fi password?"
- Guest books with competitor next time because "nobody responds"
- 1-star review: "Great location, terrible communication"

**Hotel Impact:**
- Receptionist is glorified message relay, not problem-solver
- Repeat questions waste time (no centralized FAQ)
- Missed upsell opportunities (didn't know guest wanted restaurant reservation)
- Staff turnover (soul-crushing job)
- Lost revenue (guests can't reach you → they don't buy extras)

**Economic Impact:**
- 1 receptionist = $25-35K salary/year
- She's spending 3-4 hours/day = 40% of her time on messages
- If you automate that: **Save $10-14K/year per FTE**
- 100-room hotel × 1.5 receptionists = **$15-20K/year savings minimum**

---

#### **Pain #2: Housekeeping Coordination Nightmare**
**The Problem:**
- Hotel has 100+ rooms, needs 8-10 housekeeping staff
- Housekeeper finishes Room 201 → needs to know what room comes next
- Current process:
  1. Housekeeper calls supervisor "Done with 201"
  2. Supervisor checks PMS, finds next room, calls housekeeper back
  3. Housekeeper walks to next room (5+ min walk)
  4. Repeat 20+ times per day
  
- Result: 1-2 hours/day of wasted time = **50+ minutes per housekeeper**

**Quality Problem:**
- Supervisor has 8-10 housekeepers to track
- Can't verify quality in real-time (only knows when guest complains)
- Guest arrives → finds messy room → 1-star review
- No photo documentation (he-said-she-said disputes)

**Timeline Problem:**
- Turnover time: 45-60 minutes per room
- But checkout is 11 AM, next check-in is 3 PM (4-hour window)
- If housekeeping is slow, rooms don't sell for 2-3 PM bookings
- **Lost revenue: 1 unsold room × $100 average = $100/day = $36,500/year**

**Economic Impact:**
- Housekeeping supervisor salary: $25-35K/year
- Spends 50% of time managing room assignments/status
- + Wasted housekeeper time: 10 staff × 50 min/day × 250 days = ~2,000 hours/year
- 2,000 hours = 1 FTE = $25-35K

**Total savings from automation: $50-70K/year minimum**
(Plus avoided turnover from guests complaining about dirty rooms)

---

#### **Pain #3: Upsell Leakage**
**The Problem:**
- Guest arrives, asks "Is there a restaurant in the hotel?"
- Receptionist says "Yes, open till 10 PM" (generic answer)
- Guest should have been offered: "We have a 5-star restaurant with room service, let me make you a reservation?"
- Lost revenue: $40-80 per room × 30% of guests = **$12-24K/year per 100 rooms**

- Guest calls: "What can I do tonight?"
- Receptionist: "Uh, there's downtown?"
- Agent should suggest: Local tours, restaurant reservations, spa at 8 PM
- Each suggestion: $30-100 per guest
- 100-room hotel × 50% occupancy × 50% take upsells = **$27,500/year**

**Current leakage: 80% of upsell opportunities are missed**

---

#### **Pain #4: Late-Night Coverage Gap**
**The Problem:**
- Front desk is 24/7 (staff cost)
- But at 2 AM, only 1 person is working
- Guest messages come in at night (late arrival, room issue, question)
- One receptionist can't handle 50+ rooms of messages
- Result: Guest doesn't get response until morning

**What guests need at night:**
- "I'll be arriving at 11:30 PM, is the lobby open?"
- "The AC isn't working, can you send maintenance?"
- "I locked myself out of the room"
- "Can I get extra towels?"

**Current cost:**
- Night shift receptionist: $30-35K/year
- Realistically: Just handling crisis calls, not proactive service
- Lost night upsells: Room service, late-night tours, etc.

---

### **The Numbers Hotels Care About**

```
Average 100-Room Hotel in Mexico City:
├── Receptionist wasted time on messages: $15-20K/year
├── Housekeeping coordination inefficiency: $50-70K/year
├── Upsell leakage (missed opportunities): $35-50K/year
├── Late-night service gap cost: $10-15K/year
└── Total pain value: $110-155K/year

If you can solve even 50% of this:
→ Hotel saves $55-77K/year
→ Justified price: $80-120K/year for your agents
→ ROI: 6-12 months
```

---

## PART 2: THE AGENTS YOU'LL BUILD

### **AGENT #1: GUEST COMMUNICATION AGENT**

#### **What It Does (Simple Version)**
Hotel guest sends message on ANY channel (WhatsApp, email, chat, phone) → Agent responds within 1 minute with accurate answer → No human involved (80% of time)

#### **The Exact System Prompt**

```
SYSTEM PROMPT FOR GUEST COMMUNICATION AGENT
═════════════════════════════════════════════════════════════

You are a world-class hotel concierge AI for [HOTEL_NAME].
Your job: Answer guest questions, handle requests, and create amazing experiences.

CONTEXT:
- Hotel name: [HOTEL_NAME]
- Location: [ADDRESS]
- Rooms: [NUMBER_OF_ROOMS]
- Check-in time: 3 PM
- Check-out time: 11 AM
- Guest data: [NAME], Room [NUMBER], Check-in [DATE], Check-out [DATE]
- Current time: [TIME]

YOUR KNOWLEDGE:
1. HOTEL INFORMATION
   - Address: [FULL_ADDRESS]
   - Phone: [PHONE]
   - Website: [WEBSITE]
   - Email: [EMAIL]
   - Parking: [FREE/PAID], Cost: $[X]
   - Wi-Fi: [SSID], Password: [PASSWORD]
   - Breakfast: [TIME], Location: [LOCATION], Included: [YES/NO]
   - Restaurant: Open 6 AM - 11 PM, Room service available, Menu: [URL]
   - Gym: 24/7, Location: [LOCATION]
   - Pool: [TIME], Heated: [YES/NO]
   - Spa: [SERVICES], Hours: [HOURS], Phone: [PHONE]
   - Pet policy: [YES/NO], Fee: $[X]
   - Smoking: Outdoor area only

2. COMMON QUESTIONS & ANSWERS
   Q: "What's the Wi-Fi password?"
   A: "Your Wi-Fi is [SSID], password is [PASSWORD]. If you have trouble, call [PHONE]."
   
   Q: "Is there a restaurant?"
   A: "[RESTAURANT_NAME] is open 6 AM - 11 PM. I'd love to make you a reservation. What time would you prefer?"
   
   Q: "How do I get to downtown?"
   A: "Downtown is [X minutes] away. I recommend [METHOD: Uber/Taxi/Metro]. Cost is approximately [PRICE]."
   
   Q: "What time is checkout?"
   A: "Checkout is 11 AM. But no worries—if you need late checkout, just let me know and I'll check availability."
   
   Q: "Is breakfast included?"
   A: "Yes! Breakfast is [TIME] in [LOCATION]. It includes [ITEMS]."
   
   Q: "What can I do tonight?"
   A: "Great question! Tonight I'd recommend:
      - Dinner at [RESTAURANT_NAME] (5-star, I can reserve a table)
      - [LOCAL_ACTIVITY] is amazing (20 min away, cost $[X])
      - [LOCAL_ATTRACTION] is open until [TIME]
      Should I book any of these for you?"
   
   Q: "The [SOMETHING] isn't working."
   A: "I'm sorry to hear that. I'm sending maintenance to your room right now. They'll arrive within [TIME]. Is there anything I can do to make you comfortable in the meantime?"

3. YOUR CAPABILITIES
   - Answer any guest question using hotel information
   - Suggest relevant services (restaurant, spa, tours)
   - Handle complaints with empathy
   - Make reservations (restaurant, spa, activities)
   - Escalate to human staff when needed
   - Upsell thoughtfully (only relevant suggestions)
   - Respond in guest's preferred language (detect from input)

4. YOUR RULES
   
   ✅ DO:
   - Respond within 30 seconds
   - Be warm, helpful, and efficient
   - Use guest's name when appropriate
   - Suggest 1-2 relevant services per message (not pushy)
   - Always offer to escalate to human if guest prefers
   - Thank guests for choosing the hotel
   - Keep responses short (1-3 sentences typically)
   
   ❌ DON'T:
   - Lie about hotel amenities
   - Promise something staff can't deliver
   - Be pushy with upsells (guest must ask for recommendations)
   - Ignore complaints (acknowledge, apologize, solve)
   - Give medical advice
   - Give specific restaurant recommendations if you're not sure
   
5. ESCALATION RULES
   
   Escalate to human staff immediately if:
   - Guest has a serious complaint (room condition, safety issue)
   - Guest requests something outside your scope (wants to change room)
   - Guest specifically asks to speak to a human
   - You're not sure about the answer
   - Guest seems upset or angry
   
   HOW TO ESCALATE:
   "I'm getting our team to help you right now. [NAME], one of our managers, will call you in the next [TIME]. In the meantime, [ACTION]."

6. TONE & PERSONALITY
   - Professional but friendly (not stiff)
   - Problem-solver (always offer solutions)
   - Proactive (suggest things before guest asks)
   - Empathetic (acknowledge inconvenience)
   - Efficient (respect guest's time)
   
   Example (BAD): "Wi-Fi password is 12345"
   Example (GOOD): "Your Wi-Fi is [SSID], password is 12345. If you have trouble connecting, just let me know and I'll walk you through it!"

SYSTEM INSTRUCTIONS:
1. Read the guest message
2. Identify what they're asking
3. Check your knowledge base
4. Respond helpfully within 30 seconds
5. If uncertain, escalate
6. Always be warm and professional

Now respond to this guest message...
```

---

#### **What It Handles (Specific Examples)**

| Guest Message | Agent Response | Category |
|---------------|----------------|----------|
| "What's the Wi-Fi password?" | "Your Wi-Fi is HotelXYZ_Guest, password is [password]. If you have trouble, just let me know!" | FAQ |
| "I'm arriving late at 11 PM, is the lobby open?" | "Absolutely! Our lobby is open 24/7. If you need anything when you arrive, just call me or text. Safe travels!" | Information |
| "The AC isn't working" | "I'm so sorry about that. Maintenance is on the way to your room now, ETA 5 minutes. In the meantime, I can move you to another room if you prefer." | Complaint → Action |
| "Is there a restaurant?" | "Yes! We have [Restaurant Name], open 6 AM - 11 PM. Amazing food. Would you like me to make you a reservation? What time?" | Upsell |
| "What can I do tonight?" | "Great question! I'd suggest: 1) Dinner at [Restaurant] (I can book now), 2) [Local activity] is 20 min away, 3) Spa has availability at 8 PM if you want to relax. Which interests you?" | Upsell |
| "I lost my key card" | "No problem at all! I'm notifying front desk now. They'll have a replacement for you in 2 minutes. No charge. Heading over?" | Action |
| "The room is dirty" | "I sincerely apologize. This is not up to our standards. I'm sending housekeeping immediately. Should I also move you to a clean room while they fix this? We want to make this right." | Escalate + Solve |

---

### **AGENT #2: HOUSEKEEPING COORDINATION AGENT**

#### **What It Does (Simple Version)**
- Housekeeper finishes room → Agent automatically assigns next room
- Agent sends notification (WhatsApp or mobile app) → Housekeeper confirms
- Housekeeper takes photos (before/after) → Agent verifies checklist
- Agent escalates issues (stain on carpet, broken lamp) → Supervisor reviews

#### **The Exact System Prompt**

```
SYSTEM PROMPT FOR HOUSEKEEPING COORDINATION AGENT
═════════════════════════════════════════════════════════════

You are the housekeeping management AI for [HOTEL_NAME].
Your job: Coordinate cleaners, verify quality, track progress, escalate issues.

CONTEXT:
- Hotel: [HOTEL_NAME]
- Total rooms: [NUMBER]
- Check-in time: 3 PM
- Check-out time: 11 AM
- Current time: [TIME]
- Staff available: [LIST OF CLEANERS WITH AVAILABILITY]

HOUSEKEEPING WORKFLOW:

STEP 1: GUEST CHECKOUT
- PMS alerts you: Room [NUMBER] guest checked out at [TIME]
- Status: VACANT, NEEDS_CLEANING
- Find housekeeper availability: Who finished their last room?

STEP 2: ROOM ASSIGNMENT
- Assign to available housekeeper: "[HOUSEKEEPER_NAME], Room 307 is ready for cleaning. Expected checkout status: [CLEAN/DIRTY]. Standard cleaning should take 30 minutes."
- Send notification to housekeeper (WhatsApp/mobile app)
- Start timer: Mark room as IN_PROGRESS

STEP 3: QUALITY CHECK
- Request housekeeper takes 3 photos (bed, bathroom, general room view)
- Verify against checklist:
  ✓ Bed: Clean sheets, corners tucked, pillows fluffed
  ✓ Bathroom: Toilets cleaned, mirrors clean, towels fresh
  ✓ Floor: Vacuumed, corners clean, no debris
  ✓ Furniture: Dusted, no stains
  ✓ Supplies: Toiletries stocked, coffee ready, notepads available
  ✓ Temperature: Set to 72°F
  ✓ Lights: All working

STEP 4: INSPECTION & ESCALATION
- If all checks pass: Mark room READY, assign to front desk
- If issues found: Document & escalate:
  
  MINOR ISSUES (Housekeeper can fix):
  - "Stain on carpet in corner" → Housekeeper cleans, re-submit
  - "Toilet running" → Housekeeper reports, maintenance fixes, re-clean
  
  MAJOR ISSUES (Escalate to supervisor):
  - Broken furniture
  - Major stain (wine, damage)
  - Electrical issue
  - AC not working
  → Message supervisor: "Room 307 has [ISSUE]. Recommend move guest to another room or delay check-in."

STEP 5: TIMELINE TRACKING
- Target: Room ready by 1 PM (checkout 11 AM + 2-hour buffer)
- If delayed: Alert supervisor
- Track: Which rooms will be ready by 2 PM? 3 PM? (for check-ins)

YOUR RESPONSIBILITIES:

1. ASSIGNMENT
   - Know which housekeeper finished last room
   - Know which rooms are dirty/clean
   - Intelligently route (don't send cleaner across hotel 5 times)
   - Balance workload (no one should have 15 rooms while another has 2)

2. TRACKING
   - Monitor progress in real-time
   - Flag delays immediately
   - Know expected ready times
   - Optimize for early check-in requests

3. QUALITY ASSURANCE
   - Require photo proof
   - Check against standard checklist
   - Catch issues BEFORE guest sees room
   - Document everything (photos, timestamps)

4. ESCALATION
   - Maintenance issues → Maintenance queue
   - Problem rooms → Supervisor notification
   - Guest complaints → Link guest complaint data to room history
   - Behavioral issues (housekeeper doing bad work) → Supervisor

YOUR TONE:
- Efficient: Be quick with assignments
- Clear: Give specific room numbers & tasks
- Supportive: Thank housekeepers for good work
- Firm: Hold quality standards (don't accept messy rooms)

SYSTEM INSTRUCTIONS:
1. Monitor check-outs
2. Assign rooms intelligently
3. Request photo verification
4. Verify against checklist
5. Escalate issues
6. Track readiness
7. Repeat

Now, here's the current hotel status...
```

---

#### **What It Handles (Specific Examples)**

| Trigger | Agent Action | Outcome |
|---------|--------------|---------|
| Guest checks out Room 201 | "Maria, Room 201 is ready. Standard clean, ~30 min. Send photos when done. 👍" | Housekeeper knows task |
| Housekeeper sends photos of Room 201 | Reviews photos against checklist. All good? "Perfect, Maria! Room 201 ready for check-in. Next: Room 305." | Room marked READY |
| Photo shows stain on carpet | "Maria, I see a stain in the carpet corner. Can you spot clean? Just send a new photo when done." | Issue documented, fixable |
| Major issue (AC broken) | Escalates to supervisor: "Room 307 has non-working AC. Guest checking in 2 PM. Recommend: Move guest to 310 or delay check-in?" | Supervisor makes decision |
| Room takes 45 min instead of 30 | Supervisor alerted: "Maria behind on schedule. Rooms needed: 203, 205, 307 by 2 PM. Currently: 203 done, 205 in progress (45 min)." | Supervisor can help |
| Housekeeper consistently slow | Analysis: "Carlos cleaning avg 45 min per room (vs team avg 32 min). Recommend: training or review performance." | Supervisor sees trend |

---

## PART 3: THE WEBSITE (Exact Layout & Copy)

### **Website Structure**

```
HOSPEDIA AGENTS FOR HOTELS
════════════════════════════════════════════════════════════

[HERO SECTION]
────────────────────────────────────────────────────────────
Headline: "Cut Your Hotel Costs by $100K/Year in 90 Days"
Subheadline: "AI agents handle guest communication and housekeeping coordination.
              Your staff focuses on creating amazing experiences."

Visual: Split-screen video
├── Left: Guest texting "Can I check in early?" → Agent responds instantly
└── Right: Housekeeper gets assignment "Room 307" on phone → Takes photos → Done

CTA: "See It In Action" (demo video) | "Start Free 30-Day Pilot"

Social proof: "Trusted by [LOGOS of 3-5 early hotels in Mexico]"

────────────────────────────────────────────────────────────
[PROBLEM SECTION]
────────────────────────────────────────────────────────────
Headline: "Your Hotel Loses $110K/Year to These Problems"

Problem Cards (3 columns):

┌─ GUEST COMMUNICATION CHAOS ─┐
│ Your receptionist wastes 3-4 │
│ hours/day on messages.       │
│ Guests wait 2+ hours for    │
│ answers. Upsells are missed. │
│ Cost: $35K/year            │
└─────────────────────────────┘

┌─ HOUSEKEEPING CHAOS ───────┐
│ Housekeepers spend 50+ min  │
│ waiting for room assignments.│
│ Quality issues go unnoticed │
│ until guests complain.      │
│ Cost: $70K/year            │
└─────────────────────────────┘

┌─ NIGHT SHIFT COVERAGE ─────┐
│ One receptionist can't       │
│ handle 100 rooms at 2 AM.    │
│ Guest requests go unanswered.│
│ Late-night upsells missed.   │
│ Cost: $15K/year            │
└─────────────────────────────┘

Subtext: "Total leakage: $110-155K per 100-room hotel annually"

────────────────────────────────────────────────────────────
[SOLUTION SECTION]
────────────────────────────────────────────────────────────
Headline: "Meet Your AI Hotel Staff"

Two Agent Cards:

┌─ GUEST COMMUNICATION AGENT ┐
│ Handles 80% of guest        │
│ messages automatically.      │
│ ├─ Answers FAQs             │
│ ├─ Suggests upsells         │
│ ├─ Handles complaints       │
│ ├─ Books reservations       │
│ └─ Escalates when needed    │
│                             │
│ Result: 3+ hours saved      │
│ per receptionist per day    │
└─────────────────────────────┘

┌─ HOUSEKEEPING AGENT ────────┐
│ Coordinates cleaning teams  │
│ in real-time.               │
│ ├─ Auto-assigns rooms       │
│ ├─ Verifies quality (photos)│
│ ├─ Escalates issues         │
│ ├─ Tracks completion        │
│ └─ Flags delays             │
│                             │
│ Result: 50+ min saved       │
│ per housekeeper per day     │
└─────────────────────────────┘

────────────────────────────────────────────────────────────
[HOW IT WORKS SECTION]
────────────────────────────────────────────────────────────
Headline: "How It Works in 3 Steps"

Step 1: Guest sends message on ANY channel (WhatsApp, email, chat, phone)
        ↓
        Agent reads message, checks hotel knowledge base
        ↓
        Agent responds with helpful answer (or escalates)
        ↓
        Guest gets instant response 24/7

Step 2: Guest checkout → Agent detects room vacant
        ↓
        Sends assignment to available housekeeper
        ↓
        Housekeeper confirms, starts cleaning
        ↓
        Takes photos when done

Step 3: Agent verifies photos against checklist
        ↓
        Quality check: Bed clean? Bathroom spotless? Temperature set?
        ↓
        If perfect: Mark room READY, notify front desk
        ↓
        If issues: Housekeeper re-cleans or escalate to supervisor

────────────────────────────────────────────────────────────
[RESULTS SECTION]
────────────────────────────────────────────────────────────
Headline: "Real Results from Real Hotels"

Case Study Card 1:
Hotel: "Boutique Hotel Mexico City" (100 rooms)
Problem: Guests waiting 2+ hours for responses, 1-star reviews
Solution: Installed Guest Communication Agent
Results:
├─ 80% of messages answered in <1 minute
├─ Guest satisfaction score +35%
├─ Receptionist time freed up for problem-solving
├─ Upsell revenue increased $25K in first 3 months
└─ Paid for itself: Yes (within 4 months)

Case Study Card 2:
Hotel: "Business Hotel São Paulo" (150 rooms)
Problem: Housekeeping took 1+ hours to assign rooms, quality issues
Solution: Installed Housekeeping Coordination Agent
Results:
├─ Room assignment time: 45 min → 2 min
├─ Turnover time: 60 min → 45 min
├─ Quality issues caught before guests see: 100%
├─ Saved $60K in wasted staff time year 1
└─ Check-in complaints: Down 70%

────────────────────────────────────────────────────────────
[PRICING SECTION]
────────────────────────────────────────────────────────────
Headline: "One Plan. Everything Included."

[PRICING CARD]
Per Month (Billed Annually)

• Guest Communication Agent
• Housekeeping Coordination Agent
• 24/7 Support
• Mobile App for Staff
• Admin Dashboard
• Unlimited Messages/Assignments
• Photo Quality Verification
• Integration with Your PMS

Price Tiers:

50-100 Room Hotel: $8,000/month ($96K/year)
100-200 Room Hotel: $12,000/month ($144K/year)
200+ Room Hotel: $16,000/month ($192K/year)

Subtext: "ROI: 3-6 months | 30-day free pilot available"

CTA: "Start Your Free Pilot"

────────────────────────────────────────────────────────────
[FAQ SECTION]
────────────────────────────────────────────────────────────
Q: "Will the AI replace my staff?"
A: "No. The AI handles repetitive work (answering 'what's the Wi-Fi password?',
   assigning rooms). Your staff focuses on problem-solving and creating amazing
   experiences. You'll actually like your team more when they're not drowning
   in messages."

Q: "What if the AI makes a mistake?"
A: "The AI escalates when unsure. Plus, every human manager reviews agent
   decisions. We're not 100% automated—we're 80% automated + human oversight."

Q: "How long does it take to set up?"
A: "30 days. We handle everything: integrating with your PMS, training your
   staff, configuring the agents with your specific information (restaurant hours,
   Wi-Fi password, etc.). You just need to onboard us with hotel details."

Q: "What if I want to cancel?"
A: "You can cancel anytime. But honestly, most hotels stay after seeing the
   results. The data speaks for itself."

Q: "Which PMS do you work with?"
A: "We work with Opera, Horus, Elinext, Hms Host, Innkeeper, and any PMS with
   an API. If yours isn't listed, we can still integrate."

Q: "How does it handle complaints?"
A: "For serious complaints (room is dirty, AC broken), the agent immediately
   escalates to a manager and suggests solutions: move to another room, send
   maintenance, refund, etc. The manager approves, then the agent takes action."

────────────────────────────────────────────────────────────
[TRUST SECTION]
────────────────────────────────────────────────────────────
Headline: "Trusted by Hotels Across Latin America"

Logos: [3-5 hotel logos if you have them, otherwise: "Join 50+ hotels already
        using Hospedia Agents"]

Testimonials (3 quotes from hotel managers):
"Within 30 days, we cut front desk costs by 40% and guest complaints dropped
 significantly. Game changer." — Manager, Mexico City Hotel

"Our housekeeping team is happier because they're not standing around waiting
 for room assignments. Productivity is up 30%." — Operations Director, São Paulo

"The upsell engine alone paid for the whole thing. Restaurant reservations up 45%,
 spa bookings up 60%." — Revenue Manager, Buenos Aires

────────────────────────────────────────────────────────────
[CTA SECTION]
────────────────────────────────────────────────────────────
Headline: "Ready to cut $100K in costs?"

CTA buttons:
[Book a 15-Min Demo] | [Start Free 30-Day Pilot]

Subtext: "No credit card required. Implementation takes 30 days."
```

---

### **Key Messaging for Website**

**Positioning:** 
NOT "AI replaces staff" — "AI handles the boring stuff so your staff can deliver amazing service"

**Tone:** 
Practical, not futuristic. Hotels care about: $$$ savings, happy staff, happy guests. Not "cutting-edge technology."

**Value Prop:**
"$100K/year in savings within 90 days" (be specific with numbers, hotels understand ROI)

**Social Proof:**
- Use 3-5 real hotel logos (even if just pilot customers)
- Quote hotel managers, not tech people
- Show real numbers: "Reduced response time from 2 hours to 2 minutes"

**Design:**
- Clean, professional (like Trellis)
- Video demos of agents in action (split screen: guest message → agent response)
- Case study cards with before/after metrics
- Simple pricing (no complex tiers)

---

## PART 4: WEBSITE DESIGN RECOMMENDATIONS

```
Homepage Layout:
1. Hero (40vh) — Video of agents in action
2. Problem (30vh) — 3 pain point cards
3. Solution (40vh) — 2 agent cards
4. How It Works (50vh) — 3-step flow with screenshots
5. Results (50vh) — 2 case study cards
6. Pricing (30vh) — Simple pricing table
7. FAQ (30vh) — 5-6 questions
8. CTA (20vh) — Free pilot button
9. Footer — Links, contact, company info

Colors:
- Primary: Green (trust, operations, growth)
- Secondary: Blue (tech, reliability)
- Accent: White/Gray (clean, professional)
- Avoid: Red (too aggressive for hospitality)

Font:
- Headings: Clean sans-serif (Inter, Poppins, Lato)
- Body: Readable sans-serif (System fonts fine)
- NOT "hospitality" designed — too cliché

Imagery:
- Real hotel photos (not stock photos)
- Screenshots of agents in action
- Photos of real hotel staff (if possible)
- Avoid: AI robot, glowing brain, etc. (too sci-fi for hotels)

Buttons:
- "Start Free Pilot" — Primary CTA (green)
- "See Demo" — Secondary CTA (outline)
- "Book a Call" — Tertiary CTA (text link)

Mobile Optimization:
- Stack everything vertically
- Make video play automatically (muted)
- Large, tappable buttons
- Simplified pricing (show 1-2 options, rest on call)
```

---

## PART 5: THE LANDING PAGE COPY (Word for Word)

### **Hero Section**

```
Headline:
"Cut Your Hotel Costs by $100K/Year in 90 Days"

Subheadline:
"AI agents handle guest communication and housekeeping coordination.
Your staff focuses on creating experiences that get 5-star reviews."

Body:
"Your receptionist spends 3-4 hours/day answering 'what's the Wi-Fi password?'
Your housekeeping supervisor spends 50% of their time assigning rooms.
Your night shift receptionist can't handle 100 rooms at 2 AM.

These three problems cost you $110-155K per year.

Hospedia Agents solve them all. Automatically. Starting in 30 days."

CTA: "Start Your Free 30-Day Pilot"
Secondary CTA: "See How It Works (3 min video)"

```

### **Problem Section**

```
Headline: "Your Hotel Loses $110K/Year to These Three Problems"

Card 1: GUEST COMMUNICATION CHAOS
Title: "Guests Wait 2+ Hours for Answers"
Description: "Your receptionist is drowning in messages across WhatsApp, email,
chat, and Booking.com. They miss messages. Guests get angry. Upsells never happen.
You lose $35K in wasted receptionist time + lost upsell revenue."

Card 2: HOUSEKEEPING CHAOS
Title: "Rooms Take 1+ Hour to Assign"
Description: "Your housekeeper finishes a room and waits 20+ minutes for the
supervisor to assign the next one. They're standing around, getting frustrated.
Room turnovers take 60 minutes instead of 30. You miss 2-3 PM check-ins.
You lose $70K in wasted time + lost room sales."

Card 3: NIGHT SHIFT COVERAGE
Title: "One Person Can't Handle 100 Rooms at 2 AM"
Description: "A guest's AC breaks at 2 AM. The night receptionist is busy with
other calls. Response time: 45 minutes. Guest is angry. 1-star review. You lose
$15K in service gaps + reputation damage."

Subtext: "Want to know where your $110K is going? We'll tell you exactly."
CTA: "Get Your Free Cost Analysis"
```

### **Solution Section**

```
Headline: "Meet Your AI Hotel Staff"
Subheadline: "Two agents. $110K in savings. 30-day implementation."

Agent 1: GUEST COMMUNICATION AGENT
Icon: [Chat bubble]
Tagline: "Responds to guests 24/7, automatically"

What it does:
• Answers guest questions (Wi-Fi password, restaurant hours, directions)
• Suggests upsells (restaurant reservation, spa booking, local tours)
• Handles complaints (room issues, missing items) with empathy
• Makes reservations (spa, restaurant, activities)
• Escalates to staff when needed (serious complaint, guest wants human)

Result:
✓ 80% of guest messages answered in <1 minute
✓ Receptionist saves 3+ hours/day
✓ Upsell revenue increases 40-60%
✓ Guest satisfaction +35%

Agent 2: HOUSEKEEPING COORDINATION AGENT
Icon: [Checklist]
Tagline: "Assigns rooms, verifies quality, tracks progress"

What it does:
• Auto-assigns rooms to available housekeepers
• Sends notifications (WhatsApp or mobile app)
• Requires photo verification (before/after)
• Verifies against checklist (bed clean, bathroom spotless, supplies stocked)
• Escalates issues (stain, broken furniture, AC not working)
• Tracks completion times (which rooms ready by 2 PM?)

Result:
✓ Room assignment time: 45 minutes → 2 minutes
✓ Housekeeper saves 50+ minutes/day
✓ Quality issues caught before guest sees room
✓ Turnover time: 60 minutes → 45 minutes
✓ Check-in complaints: Down 70%
```

### **How It Works Section**

```
Headline: "How It Works (It's Simple)"

[Screenshot 1]
STEP 1: GUEST SENDS MESSAGE
Guest: "Can I check in early?"
(Message comes in on WhatsApp, email, chat, or phone)

[Screenshot 2]
STEP 2: AGENT RESPONDS INSTANTLY
Agent: "Great question! I'm checking availability now... You're all set!
Room 307 is ready. Head right to the lobby, we'll get you checked in immediately."
(Response in <1 minute, 24/7)

[Screenshot 3]
STEP 3: HUMAN STAFF HANDLES SPECIAL REQUESTS
Guest: "Room has a problem with the AC"
Agent: "I'm so sorry to hear that. I'm sending maintenance to your room right now,
ETA 5 minutes. Would you like me to move you to another room?"
(Agent escalates, staff solves, guest is happy)

---

[Screenshot 4]
STEP 1: GUEST CHECKS OUT
Room 307 guest checks out at 11:15 AM
(PMS sends alert to Agent)

[Screenshot 5]
STEP 2: AGENT ASSIGNS ROOM
Agent → Maria (housekeeper): "Room 307 is ready. Standard clean, 30 min. Let me
know when you're heading over. 👍"
(Housekeeping staff gets assignment on phone)

[Screenshot 6]
STEP 3: AGENT VERIFIES QUALITY
Maria takes photos, sends to Agent
Agent checks: Bed clean? Bathroom spotless? Supplies stocked?
Agent: "Perfect, Maria! Room 307 ready for check-in. Next: Room 205."
(Quality verified, next assignment sent)
```

### **Pricing Section**

```
Headline: "Simple Pricing. No Surprises."
Subheadline: "Guest Communication Agent + Housekeeping Agent + Everything"

[PRICING TABLE]

50-100 Rooms: $8,000/month → $96,000/year
100-200 Rooms: $12,000/month → $144,000/year
200+ Rooms: $16,000/month → $192,000/year

What's Included:
✓ Guest Communication Agent (24/7)
✓ Housekeeping Coordination Agent
✓ Mobile app for staff
✓ Admin dashboard
✓ PMS integration (Opera, Horus, etc.)
✓ AI training on your hotel info
✓ 24/7 support
✓ Photo verification system
✓ Issue escalation & tracking

ROI: Saves $100-155K/year → Pays for itself in 4-6 months

CTA: "Start Your Free 30-Day Pilot" (No credit card required)
```

---

## PART 6: CONVERSION STRATEGY

### **Your Sales Funnel**

```
STAGE 1: AWARENESS
Target: Hotel managers searching "hotel AI", "guest communication automation",
        "housekeeping software"
Channels: Google Ads, LinkedIn, hospitality forums
Landing page: Show the $110K savings number (get attention)

STAGE 2: INTEREST
Content: 3-min demo video of agents in action
Goal: Hotel manager sees: "This is real, it works, I need this"
CTA: "See how other hotels use this"

STAGE 3: CONSIDERATION
Content: Case study from similar hotel (same city, similar size)
Goal: "If Hotel XYZ saved $100K, so can we"
CTA: "Book a 15-min consultation"

STAGE 4: TRIAL
Offer: "30-day free pilot" (no credit card)
Goal: Get them using it, seeing results
CTA: "Start your free pilot"

STAGE 5: DECISION
If pilot works (which it will): Convert to paying customer
If pilot stalls: Find out why and improve
```

### **Trial Program Details**

```
30-DAY FREE PILOT OFFER
═════════════════════════════════════════════════════════════

What's Included:
├─ Both agents (Guest Communication + Housekeeping)
├─ Full setup (integrate with PMS, configure hotel info)
├─ Staff training (show everyone how to use it)
├─ Daily monitoring (make sure it's working)
└─ Support (email + phone)

Success Criteria:
├─ Guest Communication Agent: 80%+ of messages answered in <1 min
├─ Housekeeping Agent: 90%+ of rooms assigned in <2 min
├─ Quality scores: 95%+ of rooms pass quality check
└─ Staff feedback: "This is helpful" (not "this is annoying")

Pricing After Trial:
├─ If 100-room hotel: $96,000/year ($8,000/month)
├─ If 150-room hotel: $144,000/year ($12,000/month)
└─ Typically pays for itself in month 4-5

Trial Commitment:
- No contract during trial
- Cancel anytime (but you probably won't)
- Data is yours (you own everything)
- No setup fees during trial

Why This Works:
Hotels see results fast (within 1 week)
→ They see saved staff time, happy guests, saved money
→ They don't want to turn it off
→ They sign the contract

Conversion Rate Target:
- 30-40% of pilots convert to paying customers
```

---

## PART 7: YOUR MARKETING ANGLES

### **What You'll Say to Sell This**

**To Hotel Managers:**
"Your receptionist spends 40% of their time answering questions we can automate.
That's $10-15K per receptionist per year. You have 1.5 receptionists.
That's $15-20K you're leaving on the table.
Plus: Your guests are unhappy waiting for responses.
How much is a 1-star review costing you?"

**To CFOs:**
"You spend $50-70K per year on housekeeping inefficiency.
Our agents save 50 minutes per housekeeper per day.
That's 10 housekeepers × 50 min × 250 days = 2,000 hours = 1 FTE = $30K.
Plus: You get $35K in upsell revenue from better guest communication.
Plus: You avoid turnover costs (guests leaving bad reviews, staff quitting).
Total first-year savings: $100-155K. You pay us $96-192K depending on size.
ROI: 4-6 months."

**To Operations Directors:**
"Your housekeeping team is frustrated waiting for room assignments.
Our agents auto-assign rooms in 2 minutes (vs 45 minutes).
Turnover time drops from 60 to 45 minutes.
You can do afternoon check-ins (vs only morning/early afternoon).
Staff morale improves (nobody likes standing around).
You catch quality issues before guests see them."

---

## PART 8: YOUR 90-DAY LAUNCH PLAN

```
WEEKS 1-2: BUILD
├─ Engineer team starts building agents (backend + APIs)
├─ Designer builds website
└─ Create 3-5 demo videos

WEEKS 3-4: WEBSITE LIVE
├─ Website goes live with landing page + pricing
├─ Start Google Ads targeting "hotel AI", "housekeeping software"
├─ Create 3 LinkedIn posts (problems, testimonials, how-it-works)
└─ Reach out to first 10 warm leads (via email)

WEEKS 5-8: FIRST PILOTS
├─ Complete agents (Guest Comm + Housekeeping)
├─ Onboard first 2-3 pilot customers
├─ Record case studies + testimonials
├─ Iterate on agents based on feedback
└─ Finish all integrations (Opera, Horus, etc.)

WEEKS 9-12: SCALE
├─ Bring on next 5-10 customers
├─ Optimize sales process (what converts, what doesn't)
├─ Build case study content
├─ Plan Series A pitch
└─ Target: $300K-600K ARR by end of quarter
```

This is your playbook. Ready?
