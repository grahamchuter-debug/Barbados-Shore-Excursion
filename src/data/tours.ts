export type BestForBadge =
  | 'Best Cave Tour'
  | 'Best Beach Day'
  | 'Best for Families'
  | 'Best for First-Time Visitors'
  | 'Best Turtle Swim'
  | 'Best Snorkel Tour'
  | 'Best Culture Tour'
  | 'Best Food Tour'
  | 'Best Rum Experience'
  | 'Best for Couples'
  | 'Best Adventure';

export interface Tour {
  slug: string;
  title: string;
  shortTitle: string;
  metaDescription: string;
  price: string;
  salePrice?: string;
  duration: string;
  activityLevel: 'Easy' | 'Moderate' | 'Difficult';
  groupSize: string;
  bookingUrl: string;
  image: string;
  imageAlt: string;
  badges: BestForBadge[];
  returnToShip: boolean;
  highlights: string[];
  description: string;
  cruisePassengerTips: string[];
  relatedGuides: string[];
  relatedTours: string[];
}

export const tours: Tour[] = [
  {
    slug: 'harrisons-cave-tour',
    title: "Harrison's Cave Tour — Barbados Shore Excursion from Bridgetown",
    shortTitle: "Harrison's Cave Tour",
    metaDescription:
      "Book the Harrison's Cave tour from Bridgetown cruise port. Small-group tram ride through Barbados' top cave attraction. 3-hour shore excursion with guaranteed return to ship.",
    price: '$169',
    salePrice: '$139',
    duration: '3 Hours',
    activityLevel: 'Easy',
    groupSize: 'Small (2–20 guests)',
    bookingUrl: 'https://www.shoreexcursionsgroup.com/tour/harrisons-cave-barbados/cabrcave',
    image: '/images/harrisons-cave.jpg',
    imageAlt:
      "Harrison's Cave interior in Barbados with stalactites, crystal-clear subterranean pool, and illuminated limestone formations on a shore excursion from Bridgetown cruise port.",
    badges: ['Best Cave Tour', 'Best for First-Time Visitors', 'Best for Families'],
    returnToShip: true,
    highlights: [
      'Small-group cave visit with electrically operated tram',
      'Stalactites, stalagmites, and emerald underground pools',
      '30-minute drive from Bridgetown pier to central Barbados',
      'Informative guides and optional educational video',
      'Guaranteed return to cruise ship on time',
    ],
    description: `No Barbados cruise day is complete without Harrison's Cave — the island's most celebrated natural wonder. This focused 3-hour shore excursion departs directly from the Bridgetown cruise pier and travels inland to the heart of Barbados, roughly 25–30 minutes by road.

Board an electric tram for a guided journey through illuminated caverns where stalactites hang from vaulted ceilings and stalagmites rise from the cave floor. Crystal-clear pools and underground streams create an otherworldly landscape that captivates first-time visitors and repeat cruisers alike.

After your cave experience, transportation returns you to the port with time to spare before all-aboard. This is the ideal rainy-day or culture-and-nature option when you want one iconic Barbados sight without a full-day commitment.`,
    cruisePassengerTips: [
      'Harrison\'s Cave is approximately 7 miles (11 km) from Bridgetown cruise port — allow 25–30 minutes each way.',
      'Wear comfortable walking shoes; the tram ride is easy but there are steps at the visitor centre.',
      'Book early — this tour frequently sells out on busy Caribbean cruise days.',
      'Ideal for families and passengers who prefer minimal physical exertion.',
      'Return to ship 60–90 minutes before all-aboard even with guaranteed excursions.',
    ],
    relatedGuides: ['harrisons-cave-guide', 'barbados-port-guide', 'one-day-in-barbados-from-a-cruise-ship'],
    relatedTours: ['highlights-of-barbados', 'bajan-paradise', 'mount-gay-rum-distillery-tour'],
  },
  {
    slug: 'barbados-beach-day',
    title: 'Barbados Beach Day — Carlisle Bay Shore Excursion from Bridgetown',
    shortTitle: 'Barbados Beach Day',
    metaDescription:
      'Relax at Savvy on the Bay on Carlisle Bay with lounge chairs, beach bar, and turquoise water. Easy 6-hour Barbados beach day shore excursion from Bridgetown cruise port.',
    price: '$69',
    duration: '6 Hours',
    activityLevel: 'Easy',
    groupSize: 'Standard (20–50 guests)',
    bookingUrl: 'https://www.shoreexcursionsgroup.com/tour/barbados-beach-day/cabrbeach',
    image: '/images/beach-day.jpg',
    imageAlt:
      'Aerial view of a secluded white sand Barbados beach with turquoise Caribbean water, palm trees, and rocky cliffs on a Barbados Beach Day shore excursion from Bridgetown cruise port.',
    badges: ['Best Beach Day', 'Best for Couples', 'Best for Families'],
    returnToShip: true,
    highlights: [
      'Savvy on the Bay beach facility at UNESCO-listed Carlisle Bay',
      'Lounge chairs and shared umbrellas included (9:30 AM–4:00 PM)',
      'Beach bar, showers, washrooms, and changing rooms on site',
      'Carlisle Bay Marine Park with 6 shipwrecks nearby',
      'Multiple pickup times with scheduled return to pier',
    ],
    description: `Skip the crowded ship-organized beach trips and claim your spot at Savvy on the Bay — one of Carlisle Bay's best-equipped beach clubs, just minutes from the Bridgetown cruise terminal. This easy, affordable shore excursion is built for passengers who want sun, sand, and turquoise Caribbean water without a packed sightseeing agenda.

Carlisle Bay sits in Barbados' capital and offers calm, swimmable water plus the famous marine park where snorkelers spot starfish, rays, and tropical fish around historic shipwrecks. Lounge chairs, a beach bar, and on-site facilities make this a stress-free beach day with reliable return-to-ship transfers.

Choose from morning or late-morning departures to match your ship's schedule. Guests who want extra beach time can stay later and arrange their own taxi back to port.`,
    cruisePassengerTips: [
      'Carlisle Bay is only 1.5 miles from Bridgetown cruise port — about 5 minutes by taxi or 10–15 minutes on foot.',
      'Wear your swimsuit under comfortable cover-ups; bring sunscreen, hat, and a beach towel.',
      'Return times vary by pickup: earliest pickup returns ~2:20 PM; latest ~4:40 PM.',
      'Lunch is available at the oceanfront restaurant at your own expense.',
      'Perfect for couples and families wanting a low-key Caribbean beach day.',
    ],
    relatedGuides: ['carlisle-bay-guide', 'barbados-port-guide', 'best-barbados-shore-excursions'],
    relatedTours: ['carlisle-bay-beach-and-snorkel', 'swim-with-turtles-tour', 'bajan-paradise'],
  },
  {
    slug: 'highlights-of-barbados',
    title: 'Highlights of Barbados — Half-Day Shore Excursion from Bridgetown',
    shortTitle: 'Highlights of Barbados',
    metaDescription:
      'See Barbados highlights in 4 hours from Bridgetown cruise port. Small-group island tour covering scenic viewpoints, historic sites, and Bajan culture. Easy activity level.',
    price: '$98',
    duration: '4 Hours',
    activityLevel: 'Easy',
    groupSize: 'Small (2–20 guests)',
    bookingUrl: 'https://www.shoreexcursionsgroup.com/tour/highlights-of-barbados/cabrhigh',
    image: '/images/bathsheba-coast.jpg',
    imageAlt:
      'Scenic Bathsheba coastline on the Highlights of Barbados shore excursion from Bridgetown cruise port.',
    badges: ['Best for First-Time Visitors', 'Best Culture Tour'],
    returnToShip: true,
    highlights: [
      'Half-day overview of Barbados in just 4 hours',
      'Small-group experience away from large cruise-line buses',
      'Scenic east-coast viewpoints and island landmarks',
      'Easy activity level suitable for most cruise passengers',
      'Efficient option when your ship has a shorter port day',
    ],
    description: `Short on time but want to see the real Barbados beyond the cruise pier? The Highlights of Barbados shore excursion packs the island's greatest scenery and cultural touchpoints into a focused half-day tour departing from Bridgetown.

Travel in a small group to viewpoints along the dramatic east coast, historic parishes, and photo-worthy Bajan landscapes that define this Caribbean nation. Your guide shares stories of island life, British heritage, and the natural beauty that makes Barbados a favourite Eastern Caribbean port of call.

At just four hours, this tour leaves room in your day for shopping in Bridgetown or a quick stop at Carlisle Bay — ideal for first-time visitors who want orientation without committing to a full-day adventure.`,
    cruisePassengerTips: [
      'Best for first-time visitors with 4–6 hours ashore who want an island overview.',
      'Easy walking only — no strenuous hikes required.',
      'Pairs well with an afternoon beach stop at Carlisle Bay near the port.',
      'Bring a camera for east-coast scenery and Cherry Tree Hill views when included.',
      'Confirm your ship\'s all-aboard time before booking afternoon departures.',
    ],
    relatedGuides: ['one-day-in-barbados-from-a-cruise-ship', 'barbados-port-guide', 'best-barbados-shore-excursions'],
    relatedTours: ['bajan-paradise', 'harrisons-cave-tour', 'barbados-food-and-heritage-tour'],
  },
  {
    slug: 'bajan-paradise',
    title: 'Bajan Paradise — Sightseeing and Beach Shore Excursion from Bridgetown',
    shortTitle: 'Bajan Paradise',
    metaDescription:
      'Bajan Paradise combines morning Barbados sightseeing with an afternoon beach at Carlisle Bay. 6.5-hour small-group shore excursion from Bridgetown cruise port.',
    price: '$119',
    duration: '6 Hours 30 Minutes',
    activityLevel: 'Moderate',
    groupSize: 'Small (2–20 guests)',
    bookingUrl: 'https://www.shoreexcursionsgroup.com/tour/bajan-paradise-barbados/cabrparadise',
    image: '/images/hero-carlisle-bay.jpg',
    imageAlt:
      'Turquoise Carlisle Bay waters on the Bajan Paradise sightseeing and beach shore excursion from Bridgetown.',
    badges: ['Best for Couples', 'Best for First-Time Visitors', 'Best Beach Day'],
    returnToShip: true,
    highlights: [
      'Morning island sightseeing plus afternoon beach time',
      'Small-group tour with beverage included',
      'White sand and turquoise water at a Barbados beach',
      'Cultural and scenic stops across the island',
      'Balanced full-day experience from the cruise pier',
    ],
    description: `Bajan Paradise delivers the best of both worlds: a morning of island discovery followed by an afternoon on one of Barbados' celebrated beaches. Departing from the Bridgetown cruise terminal, this small-group shore excursion showcases Bajan scenery, culture, and history before handing you off to white sand and crystal-clear Caribbean water.

It is one of the most popular full-day options for couples and first-time visitors who want more than a beach lounger but less rigour than a dive or fishing charter. A included beverage adds to the relaxed island atmosphere.

With guaranteed return-to-ship service, you can enjoy Barbados with confidence on your Eastern Caribbean itinerary.`,
    cruisePassengerTips: [
      'Moderate activity — some walking at scenic stops; bring comfortable shoes and swimwear.',
      'Ideal for couples wanting a romantic mix of culture and beach.',
      'Full-day format — confirm your ship is in port at least 7 hours.',
      'Beach portion is typically on the calm west or south coast near Bridgetown.',
      'Book early on days when multiple ships are in Bridgetown harbour.',
    ],
    relatedGuides: ['carlisle-bay-guide', 'one-day-in-barbados-from-a-cruise-ship', 'best-barbados-shore-excursions'],
    relatedTours: ['highlights-of-barbados', 'barbados-beach-day', 'swim-with-turtles-tour'],
  },
  {
    slug: 'discover-scuba-barbados',
    title: 'Discover Scuba Barbados — Introductory Dive Shore Excursion',
    shortTitle: 'Discover Scuba Barbados',
    metaDescription:
      'Try scuba diving in Barbados with a Discover Scuba shore excursion from Bridgetown. Beginner-friendly 4.5-hour dive with instruction, equipment, and reef exploration.',
    price: '$183',
    duration: '4 Hours 30 Minutes',
    activityLevel: 'Moderate',
    groupSize: 'Small (2–20 guests)',
    bookingUrl: 'https://www.shoreexcursionsgroup.com/tour/discover-scuba-barbados/cabrscuba',
    image: '/images/scuba-diver.jpg',
    imageAlt:
      'Scuba diver exploring Caribbean reef on Discover Scuba Barbados shore excursion from Bridgetown cruise port.',
    badges: ['Best Adventure', 'Best Snorkel Tour'],
    returnToShip: true,
    highlights: [
      'Beginner-friendly introduction to scuba diving',
      'Professional instruction and all equipment provided',
      'Explore Barbados reefs and tropical marine life',
      'Beverages included; no certification required',
      'One of the Caribbean\'s premier warm-water dive destinations',
    ],
    description: `Barbados ranks among the Caribbean's best introductory dive destinations, and this Discover Scuba shore excursion makes it easy for cruise passengers with no prior certification. After pickup at the Bridgetown pier, you'll receive professional instruction, fitted equipment, and a supervised dive among tropical fish, coral formations, and — depending on site — shipwreck scenery.

The 4.5-hour format fits most standard port days while leaving a safety buffer before all-aboard. Beverages are included, and the small-group setting ensures personalised attention from your dive team.

If you've ever wanted to breathe underwater in the Caribbean, this is the Barbados excursion to book.`,
    cruisePassengerTips: [
      'No scuba certification needed — designed for first-time divers age 12+ (operator restrictions apply).',
      'Moderate fitness required; complete medical questionnaire honestly before booking.',
      'Allow 4.5 hours plus buffer — do not book if your ship departs early afternoon.',
      'Bring swimwear, towel, and reef-safe sunscreen.',
      'Not suitable for pregnant passengers or those with certain medical conditions.',
    ],
    relatedGuides: ['carlisle-bay-guide', 'swim-with-turtles-barbados', 'barbados-port-guide'],
    relatedTours: ['carlisle-bay-beach-and-snorkel', 'swim-with-turtles-tour', 'barbados-fishing-charter'],
  },
  {
    slug: 'barbados-fishing-charter',
    title: 'Barbados Fishing Charter — Private Deep Sea Fishing from Bridgetown',
    shortTitle: 'Barbados Fishing Charter',
    metaDescription:
      'Private 42-foot deep sea fishing charter from Bridgetown, Barbados. Target marlin, tuna, and dorado on a 5-hour shore excursion with snacks and beverages included.',
    price: 'From $1,071',
    duration: '5 Hours',
    activityLevel: 'Easy',
    groupSize: 'Private',
    bookingUrl: 'https://www.shoreexcursionsgroup.com/tour/private-half-day-deep-sea-fishing-charter-barbados/cabrfish',
    image: '/images/fishing-boat.jpg',
    imageAlt:
      'Deep sea fishing boat departing Bridgetown Barbados on a private cruise ship fishing charter shore excursion.',
    badges: ['Best Adventure', 'Best for Couples'],
    returnToShip: true,
    highlights: [
      'Private 42-foot Hatteras fully equipped fishing vessel',
      'Target blue marlin, sailfish, tuna, dorado, and wahoo',
      'Beverages and snacks included on board',
      'Experienced captain and crew for all skill levels',
      'Unforgettable open-water Caribbean experience',
    ],
    description: `Trade the crowded tour bus for open Caribbean water on a private half-day deep sea fishing charter departing from Bridgetown. Your fully equipped 42-foot Hatteras puts you in prime Barbados fishing grounds where blue marlin, sailfish, yellowfin tuna, dorado, and wahoo run throughout the year.

This private shore excursion is priced per boat, making it excellent value for families or groups of fishing enthusiasts sharing the cost. Snacks and beverages keep you comfortable while the crew handles tackle, bait, and technique coaching.

Return timing is coordinated with your ship's schedule so you can reel in the catch of the day without watching the clock.`,
    cruisePassengerTips: [
      'Priced per charter, not per person — ideal for groups of 4–6 splitting the cost.',
      'Sea conditions vary; bring motion-sickness medication if you are prone to seasickness.',
      'Wear non-slip shoes, hat, and sunscreen; light layers recommended.',
      'Five-hour trip requires a full port day — minimum 7–8 hours in Bridgetown.',
      'Catch-and-release or local regulations apply depending on species — ask your crew.',
    ],
    relatedGuides: ['barbados-port-guide', 'is-barbados-safe-for-cruise-passengers', 'one-day-in-barbados-from-a-cruise-ship'],
    relatedTours: ['discover-scuba-barbados', 'carlisle-bay-beach-and-snorkel', 'barbados-beach-day'],
  },
  {
    slug: 'barbados-food-and-heritage-tour',
    title: 'Barbados Food and Heritage Tour — Bridgetown Culinary Shore Excursion',
    shortTitle: 'Barbados Food and Heritage Tour',
    metaDescription:
      'Taste authentic Bajan cuisine on a Food and Heritage walking tour of Bridgetown from the cruise port. 2.5-hour small-group shore excursion with tastings included.',
    price: '$93',
    duration: '2 Hours 30 Minutes',
    activityLevel: 'Moderate',
    groupSize: 'Small (2–20 guests)',
    bookingUrl: 'https://www.shoreexcursionsgroup.com/tour/food-and-heritage-tour-barbados/cabrfood',
    image: '/images/bajan-food.jpg',
    imageAlt:
      'Traditional Bajan food tasting on a Food and Heritage shore excursion walking tour in Bridgetown Barbados.',
    badges: ['Best Food Tour', 'Best Culture Tour'],
    returnToShip: true,
    highlights: [
      'Off-the-beaten-path Bridgetown food stops',
      'Beverages and tastings included',
      'Explore UNESCO World Heritage Bridgetown on foot',
      'Short 2.5-hour format fits tight port schedules',
      'Authentic Bajan flavours and local heritage stories',
    ],
    description: `Discover the belly of Barbados on a guided walking tour through Bridgetown's most flavourful neighbourhoods. This Food and Heritage shore excursion takes cruise passengers beyond the port shopping district to local eateries, markets, and historic streets where Bajan culture comes alive through taste.

Sample island specialities with beverages and tastings included, while your guide connects each bite to Barbados' British-Caribbean heritage and modern culinary scene. At just 2.5 hours, it is perfect when your ship arrives late or you want a morning tour before independent exploration.

Walking is moderate — wear comfortable shoes and arrive hungry.`,
    cruisePassengerTips: [
      'Starts near Bridgetown cruise port — minimal transfer time maximises your day.',
      'Inform your guide of food allergies when booking.',
      'Great rainy-day option — most stops are sheltered or indoors.',
      'Pairs with afternoon rum tasting or Carlisle Bay beach time.',
      'US dollars accepted at many stops; small BBD cash useful for tips.',
    ],
    relatedGuides: ['oistins-fish-fry-guide', 'mount-gay-rum-distillery-guide', 'barbados-port-guide'],
    relatedTours: ['mount-gay-rum-distillery-tour', 'highlights-of-barbados', 'barbados-beach-day'],
  },
  {
    slug: 'carlisle-bay-beach-and-snorkel',
    title: 'Carlisle Bay Beach and Snorkel — Barbados Shore Excursion',
    shortTitle: 'Carlisle Bay Beach and Snorkel',
    metaDescription:
      'Snorkel Carlisle Bay Marine Park shipwrecks and relax on the beach. Barbados snorkel shore excursion from Bridgetown with turtles, rays, and tropical fish.',
    price: '$129',
    salePrice: '$99',
    duration: '6 Hours',
    activityLevel: 'Moderate',
    groupSize: 'Standard (20–50 guests)',
    bookingUrl: 'https://www.shoreexcursionsgroup.com/tour/barbados-beach-day-and-turtle-swim/cabrturtle',
    image: '/images/snorkel-carlisle.jpg',
    imageAlt:
      'Snorkeling in clear Carlisle Bay water on a Barbados beach and snorkel shore excursion from Bridgetown cruise port.',
    badges: ['Best Snorkel Tour', 'Best for Families'],
    returnToShip: true,
    highlights: [
      'Snorkel boat ride in Carlisle Bay Marine Park',
      'Six shipwrecks and vibrant reef marine life',
      'Beach time at beautiful Carlisle Bay near Bridgetown',
      'Beverage included; moderate activity level',
      'Close to port with reliable return transfers',
    ],
    description: `Carlisle Bay Marine Park is Barbados' premier snorkelling playground, and this combined beach-and-snorkel shore excursion puts you right in the action. Depart from the Bridgetown cruise pier for a day that blends boat-based snorkelling over historic shipwrecks with leisure time on the bay's calm, turquoise shores.

Spot tropical fish, rays, and — with luck — sea turtles in remarkably clear water just minutes from your ship. A beverage is included, and the moderate activity level suits active families and snorkel enthusiasts who want more than a beach chair.

Because Carlisle Bay sits adjacent to Bridgetown, transfer times are short — giving you maximum time in the water.`,
    cruisePassengerTips: [
      'Carlisle Bay is 1.5 miles from the cruise terminal — one of the closest top snorkel sites in the Caribbean.',
      'Bring reef-safe sunscreen, towel, and optional underwater camera.',
      'Moderate activity — comfortable swimming ability recommended.',
      'Shipwreck snorkel sites are typically 10–40 feet deep; life jackets available.',
      'One of the best snorkel values for Barbados cruise passengers.',
    ],
    relatedGuides: ['carlisle-bay-guide', 'swim-with-turtles-barbados', 'best-barbados-shore-excursions'],
    relatedTours: ['swim-with-turtles-tour', 'barbados-beach-day', 'discover-scuba-barbados'],
  },
  {
    slug: 'swim-with-turtles-tour',
    title: 'Swim with Turtles Barbados — Carlisle Bay Shore Excursion',
    shortTitle: 'Swim with Turtles Barbados',
    metaDescription:
      'Swim with sea turtles in Carlisle Bay on a Barbados shore excursion from Bridgetown. Snorkel boat tour with beach time — top-rated turtle experience for cruise passengers.',
    price: '$129',
    salePrice: '$99',
    duration: '6 Hours',
    activityLevel: 'Moderate',
    groupSize: 'Standard (20–50 guests)',
    bookingUrl: 'https://www.shoreexcursionsgroup.com/tour/barbados-beach-day-and-turtle-swim/cabrturtle',
    image: '/images/sea-turtle.jpg',
    imageAlt:
      'Green sea turtle swimming in clear turquoise Caribbean water on a Swim with Turtles Barbados shore excursion from Bridgetown cruise port.',
    badges: ['Best Turtle Swim', 'Best for Families', 'Best Snorkel Tour'],
    returnToShip: true,
    highlights: [
      'Snorkel boat excursion to swim with sea turtles',
      'Carlisle Bay beach time included',
      'Beverage included; eco-focused nature experience',
      'Top-rated Barbados excursion for cruise families',
      'Guaranteed on-time return to Bridgetown pier',
    ],
    description: `Swimming with sea turtles ranks among the most memorable experiences in the Caribbean, and Barbados' Carlisle Bay is one of the few places where cruise passengers can reliably encounter these gentle creatures on a half-day shore excursion. Board a snorkel boat from the Bridgetown area for guided turtle encounters in clear, warm water, then unwind on the beach at beautiful Carlisle Bay.

This tour consistently earns top reviews from cruise passengers for its combination of wildlife, snorkelling, and relaxed beach time. Beverages are included, and the operator coordinates return transfers with your ship's schedule.

For families, couples, and anyone who has dreamed of swimming beside a sea turtle, this is the essential Barbados booking.`,
    cruisePassengerTips: [
      'Do not touch or chase turtles — maintain respectful distance for their safety and yours.',
      'Peak turtle sightings in Carlisle Bay are typically morning to early afternoon.',
      'Bring snorkel gear if you prefer your own fit; equipment usually provided on boat.',
      'Combine with our Carlisle Bay guide for independent beach time on another visit.',
      'Frequently sells out — reserve before your cruise when possible.',
    ],
    relatedGuides: ['swim-with-turtles-barbados', 'carlisle-bay-guide', 'best-barbados-shore-excursions'],
    relatedTours: ['carlisle-bay-beach-and-snorkel', 'barbados-beach-day', 'bajan-paradise'],
  },
  {
    slug: 'mount-gay-rum-distillery-tour',
    title: 'Mount Gay Rum Distillery Tour — Barbados Shore Excursion',
    shortTitle: 'Mount Gay Rum Distillery Tour',
    metaDescription:
      'Visit Mount Gay Rum distillery near Bridgetown on a Barbados shore excursion. Rum tasting, heritage museum, and guided tour — the oldest rum brand in the world.',
    price: 'From $82',
    duration: '1–4 Hours (varies by package)',
    activityLevel: 'Easy',
    groupSize: 'Small to Standard',
    bookingUrl: 'https://www.shoreexcursionsgroup.com/port/barbados-shore-excursions',
    image: '/images/mount-gay-rum.jpg',
    imageAlt:
      'Mount Gay Rum barrels and tasting room on a Barbados rum distillery shore excursion from Bridgetown cruise port.',
    badges: ['Best Rum Experience', 'Best Culture Tour', 'Best for Couples'],
    returnToShip: true,
    highlights: [
      'World\'s oldest rum brand — 300+ years of Barbados heritage',
      'Guided distillery and museum experience',
      'Rum tasting with expert narration',
      'Approximately 15 minutes north of Bridgetown cruise port',
      'Easy activity level — ideal short port-day filler',
    ],
    description: `Barbados is the birthplace of rum, and Mount Gay is its most legendary name. This rum distillery shore excursion takes cruise passengers from the Bridgetown pier to the Mount Gay visitor experience where copper stills, ageing barrels, and centuries of island history come together in a tasting you'll remember long after sail-away.

Learn how sugar cane becomes world-class rum, explore the heritage museum, and sample distinctive expressions that showcase Barbados' terroir and craftsmanship. The easy format suits passengers of all ages (tasting for 18+), and the distillery's proximity to port means you can pair this with a Bridgetown walk or Carlisle Bay swim the same day.

For rum lovers, culture seekers, and couples, this is Barbados in a glass.`,
    cruisePassengerTips: [
      'Mount Gay is roughly 4 miles (6.4 km) north of Bridgetown — about 15 minutes by taxi.',
      'Must be 18+ to participate in rum tasting; photo ID may be required.',
      'Short-format tours fit ships with limited port hours.',
      'Designated driver not needed — you\'ll return to ship by organised transfer.',
      'Visit our Mount Gay guide for independent visit tips and taxi fares.',
    ],
    relatedGuides: ['mount-gay-rum-distillery-guide', 'oistins-fish-fry-guide', 'barbados-port-guide'],
    relatedTours: ['barbados-food-and-heritage-tour', 'highlights-of-barbados', 'harrisons-cave-tour'],
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}
