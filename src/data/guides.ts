export interface Guide {
  slug: string;
  title: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: { heading: string; content: string }[];
  relatedTours: string[];
  relatedGuides: string[];
}

export const guides: Guide[] = [
  {
    slug: 'barbados-port-guide',
    title: 'Barbados Port Guide — Bridgetown Cruise Terminal for Passengers',
    metaDescription:
      'Complete Bridgetown cruise port guide for Barbados. Terminal layout, walking distances, taxis, Carlisle Bay proximity, safety tips, and return-to-ship advice for cruise passengers.',
    image: '/images/bridgetown-port.jpg',
    imageAlt:
      'Bridgetown Barbados cruise port harbour viewed from the sea — guide for cruise ship passengers.',
    intro:
      'Bridgetown is the capital of Barbados and the primary cruise port on the island. Most Eastern and Southern Caribbean itineraries dock at the Bridgetown Cruise Terminal, placing you within walking distance of UNESCO-listed historic Bridgetown and the turquoise waters of Carlisle Bay.',
    sections: [
      {
        heading: 'Where Is the Bridgetown Cruise Port?',
        content:
          'The Bridgetown Cruise Terminal sits on the southwest coast of Barbados, along the Carlisle Bay waterfront. Your ship docks steps from the terminal building, which houses duty-free shops, tour meeting points, and taxi stands. The port address area is commonly referred to as the Deep Water Harbour — look for signage directing you to "Port" or "Cruise Terminal" when exiting the ship.',
      },
      {
        heading: 'Walking Around Bridgetown',
        content:
          'Historic Bridgetown and its Garrison are a UNESCO World Heritage Site. From the cruise terminal, you can walk 10–15 minutes to downtown shops on Broad Street, the Chamberlain Bridge, and Independence Square. Streets are generally flat and pedestrian-friendly during daylight hours. For a self-guided stroll, head south along the waterfront toward Carlisle Bay or north into the city centre for rum shops, local crafts, and cafes.',
      },
      {
        heading: 'How Far Is Carlisle Bay from the Cruise Port?',
        content:
          'Carlisle Bay is approximately 1.5 miles (2.4 km) from the Bridgetown cruise terminal — about 10–15 minutes on foot along the waterfront, or 5 minutes by taxi ($10–15 USD typical). This makes Carlisle Bay the most convenient beach for cruise passengers who want sand and snorkelling without a tour bus.',
      },
      {
        heading: 'Taxi and Transportation Tips',
        content:
          'Licensed taxis queue at the cruise terminal. Fares are usually quoted in Barbados dollars (BBD) but US dollars are widely accepted at 2:1. Agree on a fare before departing, or ask for metered service. Shared minibus routes run across the island but are less predictable for tight cruise schedules — book a shore excursion or private taxi when timing matters. Ride-hailing is limited; taxis remain the primary option.',
      },
      {
        heading: 'Return-to-Ship Timing',
        content:
          'Plan to be back at the Bridgetown pier 60–90 minutes before your published all-aboard time. Traffic around Bridgetown is usually light, but tour delays and afternoon showers happen. Shore excursions booked through reputable operators include guaranteed return-to-ship policies. If exploring independently, set a phone alarm and keep your ship\'s pier location card with you.',
      },
      {
        heading: 'Currency, Weather, and Practical Info',
        content:
          'Barbados uses the Barbadian dollar (BBD), fixed at roughly 2 BBD per 1 USD. Credit cards work at major shops; carry small cash for taxis and market vendors. Weather is tropical year-round — mid-80s°F (29°C) with brief showers possible June through November. Dry season runs December through April. English is the official language. Cruise passengers staying under 24 hours typically do not need a visa; check your nationality\'s requirements for longer stays.',
      },
    ],
    relatedTours: ['barbados-beach-day', 'highlights-of-barbados', 'barbados-food-and-heritage-tour'],
    relatedGuides: ['one-day-in-barbados-from-a-cruise-ship', 'carlisle-bay-guide', 'is-barbados-safe-for-cruise-passengers'],
  },
  {
    slug: 'one-day-in-barbados-from-a-cruise-ship',
    title: 'One Day in Barbados from a Cruise Ship — Sample Itineraries',
    metaDescription:
      'How to spend one day in Barbados from your cruise ship. Sample itineraries for 4-hour, 6-hour, and full port days from Bridgetown with beaches, caves, and culture.',
    image: '/images/bathsheba-coast.jpg',
    imageAlt:
      'Barbados east coast scenery for cruise passengers planning one day ashore from Bridgetown port.',
    intro:
      'Barbados rewards cruise passengers with compact geography and diverse experiences — beaches, caves, rum, and culture all within reach of Bridgetown. How you spend your day depends on how many hours your ship is in port.',
    sections: [
      {
        heading: '4–5 Hour Port Day (Half Day)',
        content:
          'With limited time, stay close to Bridgetown. Option A: Harrison\'s Cave Tour (3 hours) — Barbados\' must-see natural wonder with guaranteed return. Option B: Highlights of Barbados (4 hours) for a scenic island overview. Option C: Food and Heritage walking tour (2.5 hours) plus independent shopping on Broad Street. Avoid long drives to the east coast on short days.',
      },
      {
        heading: '6–7 Hour Port Day (Standard)',
        content:
          'The sweet spot for Barbados. Book Bajan Paradise or Swim with Turtles for a balanced sightseeing-and-beach day. Alternatively, combine Harrison\'s Cave in the morning with a taxi to Carlisle Bay for an independent afternoon swim. Mount Gay Rum tasting fits neatly into a 6-hour window with time for lunch in Bridgetown.',
      },
      {
        heading: '8+ Hour Port Day (Full Day)',
        content:
          'Maximise a full Caribbean day with a fishing charter, full island discovery tour, or beach-and-turtle snorkel combo. East-coast scenic drives to Bathsheba pair well with morning cave visits. Save Oistins Fish Fry for evening — only if your ship overnights; day callers should book the Oistins food tour instead.',
      },
      {
        heading: 'Best Tours by Traveller Type',
        content:
          'Families: Swim with Turtles, Barbados Beach Day, Harrison\'s Cave. Couples: Bajan Paradise, Mount Gay Rum, private fishing charter. First-time visitors: Highlights of Barbados, Harrison\'s Cave, Food and Heritage. Adventure seekers: Discover Scuba, fishing charter, Carlisle Bay snorkel. Rainy day: Harrison\'s Cave, Food and Heritage, Mount Gay Rum (mostly indoor).',
      },
      {
        heading: 'Independent vs. Organised Excursions',
        content:
          'Carlisle Bay and downtown Bridgetown are easily explored without a tour. Harrison\'s Cave, east-coast drives, and turtle snorkel boats benefit from organised transfers that guarantee on-time return. See our guide on exploring without an excursion for honest pros and cons.',
      },
    ],
    relatedTours: ['highlights-of-barbados', 'bajan-paradise', 'harrisons-cave-tour'],
    relatedGuides: ['barbados-port-guide', 'best-barbados-shore-excursions', 'can-you-explore-barbados-without-an-excursion'],
  },
  {
    slug: 'best-barbados-shore-excursions',
    title: 'Best Barbados Shore Excursions — Top Picks for Cruise Passengers',
    metaDescription:
      'The best Barbados shore excursions ranked for cruise passengers. Top tours for families, couples, first-timers, beaches, snorkelling, culture, and rainy days from Bridgetown.',
    image: '/images/hero-carlisle-bay.jpg',
    imageAlt:
      'Carlisle Bay Barbados — best shore excursions for cruise passengers visiting Bridgetown port.',
    intro:
      'We evaluated Shore Excursions Group\'s Barbados inventory through the lens of cruise passengers docking at Bridgetown — weighing transfer time, return-to-ship reliability, value, and the experiences that define a great Caribbean port day.',
    sections: [
      {
        heading: 'Best Overall Experiences',
        content:
          '1. Swim with Turtles Barbados — iconic wildlife in Carlisle Bay. 2. Harrison\'s Cave Tour — Barbados\' top natural attraction. 3. Bajan Paradise — balanced sightseeing and beach. 4. Highlights of Barbados — efficient half-day overview. 5. Barbados Beach Day — affordable, easy Carlisle Bay relaxation.',
      },
      {
        heading: 'Best for Families',
        content:
          'Swim with Turtles (moderate swim ability), Harrison\'s Cave (easy tram ride), and Barbados Beach Day (easy, facilities included) lead the family rankings. Avoid fishing charters and scuba with young children. Carlisle Bay\'s calm water and short transfer from port make beach tours especially family-friendly.',
      },
      {
        heading: 'Best for Couples',
        content:
          'Bajan Paradise blends romance and scenery. Mount Gay Rum Distillery Tour suits cocktail-loving pairs. Private fishing charter offers exclusive adventure. Barbados Beach Day at Savvy on the Bay delivers relaxed Caribbean intimacy without crowds.',
      },
      {
        heading: 'Best for First-Time Visitors',
        content:
          'Harrison\'s Cave and Highlights of Barbados cover the island\'s natural and cultural highlights efficiently. Add Food and Heritage for authentic Bajan flavour in Bridgetown. First-timers should prioritise organised tours over distant independent taxis when port time is limited.',
      },
      {
        heading: 'Best Beach, Snorkel, Culture, and Rainy Day',
        content:
          'Beach: Barbados Beach Day. Snorkel: Carlisle Bay Beach and Snorkel. Turtle swim: Swim with Turtles Barbados. Culture: Food and Heritage Tour. Rum: Mount Gay Distillery. Rainy day: Harrison\'s Cave, Food and Heritage, Mount Gay (indoor-focused). Adventure: Discover Scuba, Fishing Charter.',
      },
    ],
    relatedTours: ['swim-with-turtles-tour', 'harrisons-cave-tour', 'barbados-beach-day'],
    relatedGuides: ['barbados-port-guide', 'one-day-in-barbados-from-a-cruise-ship', 'carlisle-bay-guide'],
  },
  {
    slug: 'harrisons-cave-guide',
    title: "Harrison's Cave Guide — Visiting from Bridgetown Cruise Port",
    metaDescription:
      "Harrison's Cave guide for Barbados cruise passengers. Distance from Bridgetown port, tour duration, what to expect, rainy-day tips, and best shore excursions to book.",
    image: '/images/harrisons-cave.jpg',
    imageAlt:
      "Harrison's Cave interior in Barbados featuring stalactites and a turquoise subterranean pool — guide for cruise passengers visiting from Bridgetown port.",
    intro:
      "Harrison's Cave is Barbados' signature underground attraction — a crystallised limestone cavern system in the central uplands, accessed by electric tram with dramatic lighting, stalactites, stalagmites, and emerald pools.",
    sections: [
      {
        heading: 'How Far Is Harrison\'s Cave from the Cruise Port?',
        content:
          'Harrison\'s Cave lies approximately 7 miles (11 km) inland from the Bridgetown cruise terminal in the parish of St. Thomas. Expect 25–30 minutes by taxi or tour bus depending on traffic. The cave is not walkable from port — you need organised transport.',
      },
      {
        heading: 'What to Expect on a Cave Visit',
        content:
          'The visitor centre includes an optional educational video. The signature experience is a 35–45 minute electrically operated tram tour through caverns with guided commentary. Temperature underground is cool and pleasant — a welcome relief on hot Caribbean days. Photography is permitted; flash may be restricted in certain areas.',
      },
      {
        heading: 'Best Shore Excursion Option',
        content:
          'The dedicated Harrison\'s Cave Tour (3 hours) is ideal for cruise passengers — small group, direct pier pickup, and guaranteed return. Combination tours that add rum tasting or island highlights run longer; only book those on full port days (7+ hours ashore).',
      },
      {
        heading: 'Rainy Day and Family Tips',
        content:
          'Harrison\'s Cave is Barbados\' best rainy-day attraction — most of the experience is underground. Activity level is easy, making it suitable for multi-generational families. Wheelchair access is limited; check with your operator if mobility assistance is needed.',
      },
    ],
    relatedTours: ['harrisons-cave-tour', 'highlights-of-barbados', 'bajan-paradise'],
    relatedGuides: ['barbados-port-guide', 'one-day-in-barbados-from-a-cruise-ship', 'best-barbados-shore-excursions'],
  },
  {
    slug: 'carlisle-bay-guide',
    title: 'Carlisle Bay Guide — Beaches and Snorkelling Near Bridgetown Port',
    metaDescription:
      'Carlisle Bay Barbados guide for cruise passengers. Distance from Bridgetown port, best beaches, shipwreck snorkelling, turtle swims, and top shore excursions.',
    image: '/images/snorkel-carlisle.jpg',
    imageAlt:
      'Carlisle Bay snorkelling guide for cruise passengers at Bridgetown Barbados cruise port.',
    intro:
      'Carlisle Bay is the crescent-shaped harbour at the heart of Bridgetown — a UNESCO World Heritage setting with calm turquoise water, white sand, beach clubs, and the famous marine park where snorkellers explore shipwrecks and swim with sea turtles.',
    sections: [
      {
        heading: 'Distance from Bridgetown Cruise Port',
        content:
          'Carlisle Bay begins roughly 1.5 miles (2.4 km) south of the cruise terminal. Walk the waterfront in 10–15 minutes, or take a 5-minute taxi for $10–15 USD. This proximity makes Carlisle Bay the default beach choice for Barbados cruise passengers.',
      },
      {
        heading: 'Snorkelling and Marine Park',
        content:
          'Carlisle Bay Marine Park protects six shipwrecks in relatively shallow water, creating habitat for tropical fish, rays, starfish, and sea turtles. Snorkel boat tours depart from the bay and include equipment. Independent snorkellers can rent gear at beach clubs like Boatyard or Pebbles.',
      },
      {
        heading: 'Best Beach Clubs for Cruise Passengers',
        content:
          'Savvy on the Bay, Boatyard, and Pebbles Beach offer loungers, bars, showers, and water sports with day-pass or excursion pricing. The Barbados Beach Day excursion includes guaranteed lounger access at Savvy on the Bay — a reliable option on busy ship days.',
      },
      {
        heading: 'Return-to-Ship Considerations',
        content:
          'Because Carlisle Bay is so close to port, independent beachgoers have flexibility — but still return 60–90 minutes before all-aboard. Organised turtle swim and snorkel tours include pier transfers timed to your ship\'s schedule.',
      },
    ],
    relatedTours: ['barbados-beach-day', 'carlisle-bay-beach-and-snorkel', 'swim-with-turtles-tour'],
    relatedGuides: ['swim-with-turtles-barbados', 'barbados-port-guide', 'best-barbados-shore-excursions'],
  },
  {
    slug: 'swim-with-turtles-barbados',
    title: 'Swim with Turtles in Barbados — Cruise Passenger Guide',
    metaDescription:
      'How to swim with sea turtles in Barbados from your cruise ship. Carlisle Bay turtle tours, best excursions, etiquette, and tips for Bridgetown cruise passengers.',
    image: '/images/sea-turtle.jpg',
    imageAlt:
      'Green sea turtle swimming underwater in clear turquoise Barbados water — swim with turtles guide for cruise passengers at Bridgetown port.',
    intro:
      'Barbados is one of the Caribbean\'s best destinations for swimming with sea turtles in the wild. Carlisle Bay\'s protected waters host green and hawksbill turtles accustomed to snorkellers — but responsible viewing keeps these animals safe for future generations.',
    sections: [
      {
        heading: 'Where to Swim with Turtles',
        content:
          'Carlisle Bay, minutes from the Bridgetown cruise port, is the primary turtle-snorkelling area. Boat tours anchor at known turtle gathering spots and provide snorkel gear, instruction, and safety briefings. Shore-based snorkelling from beach clubs can also yield turtle sightings but boat tours offer more consistent encounters.',
      },
      {
        heading: 'Best Shore Excursion',
        content:
          'The Barbados Beach Day and Turtle Swim / Swim with Turtles Barbados excursion combines a snorkel boat ride with Carlisle Bay beach time — 6 hours, moderate activity, beverage included. It is the top-rated turtle experience for cruise passengers with guaranteed return to the Bridgetown pier.',
      },
      {
        heading: 'Turtle Swim Etiquette',
        content:
          'Never touch, ride, or chase turtles. Maintain arm\'s-length distance and let them approach you. Avoid sunscreen on your skin before entering the water — use reef-safe products. Do not feed turtles. Follow your guide\'s instructions at all times.',
      },
      {
        heading: 'Who Is This Best For?',
        content:
          'Families with confident young swimmers, couples, and first-time snorkellers seeking a signature Caribbean memory. Moderate swimming ability is recommended. Not ideal for passengers who cannot swim or have serious mobility limitations.',
      },
    ],
    relatedTours: ['swim-with-turtles-tour', 'carlisle-bay-beach-and-snorkel', 'bajan-paradise'],
    relatedGuides: ['carlisle-bay-guide', 'best-barbados-shore-excursions', 'barbados-port-guide'],
  },
  {
    slug: 'mount-gay-rum-distillery-guide',
    title: 'Mount Gay Rum Distillery Guide — Barbados Cruise Port Visit',
    metaDescription:
      'Mount Gay Rum distillery guide for Barbados cruise passengers. Distance from Bridgetown, tasting tours, history, taxi fares, and best rum shore excursions.',
    image: '/images/mount-gay-rum.jpg',
    imageAlt:
      'Mount Gay Rum distillery barrels and tasting — guide for cruise passengers visiting from Bridgetown Barbados.',
    intro:
      'Mount Gay Rum has distilled on Barbados since 1703, making it the world\'s oldest rum brand. The visitor centre north of Bridgetown offers tastings, museum exhibits, and guided experiences that distil three centuries of island heritage into an hour or two.',
    sections: [
      {
        heading: 'Location and Distance from Cruise Port',
        content:
          'Mount Gay\'s primary visitor experience is at Brandons, St. Michael — approximately 4 miles (6.4 km) north of the Bridgetown cruise terminal, or about 15 minutes by taxi ($20–30 USD typical). Some combination tours include Mount Gay with Harrison\'s Cave or island highlights.',
      },
      {
        heading: 'What to Expect',
        content:
          'Tours cover rum production, ageing in oak barrels, and Barbados\' sugar-cane heritage. Tastings compare multiple expressions — from smooth sipping rums to bolder blends. Must be 18+ with valid ID. The experience is largely indoor, making it an excellent rainy-day or heat-relief option.',
      },
      {
        heading: 'Booking Tips for Cruise Passengers',
        content:
          'Short-format rum experiences fit 4–5 hour port days. Pair with a Bridgetown walking tour or Carlisle Bay beach for a full day. Shore excursions include transport and guaranteed return timing — valuable when you plan to taste generously.',
      },
    ],
    relatedTours: ['mount-gay-rum-distillery-tour', 'barbados-food-and-heritage-tour', 'highlights-of-barbados'],
    relatedGuides: ['oistins-fish-fry-guide', 'barbados-port-guide', 'one-day-in-barbados-from-a-cruise-ship'],
  },
  {
    slug: 'oistins-fish-fry-guide',
    title: 'Oistins Fish Fry Guide — Barbados Cruise Passenger Tips',
    metaDescription:
      'Oistins Fish Fry Barbados guide for cruise passengers. Friday night market, food tours, distance from Bridgetown port, and best culinary shore excursions.',
    image: '/images/oistins-fish-fry.jpg',
    imageAlt:
      'Oistins Fish Fry Barbados street food scene — guide for cruise passengers visiting from Bridgetown port.',
    intro:
      'Oistins Fish Fry is Barbados\' most famous culinary experience — a waterfront gathering in the fishing town of Oistins where vendors grill fresh catch, play music, and serve cold drinks under the stars. For cruise passengers, timing and logistics require planning.',
    sections: [
      {
        heading: 'Distance from Bridgetown Cruise Port',
        content:
          'Oistins sits on the south coast approximately 5 miles (8 km) from the Bridgetown cruise terminal — 15–20 minutes by taxi ($25–35 USD). Too far to walk; plan round-trip transport if visiting independently.',
      },
      {
        heading: 'Daytime vs. Friday Night Fish Fry',
        content:
          'The iconic Friday night fish fry runs into the evening with live music and maximum atmosphere — only practical if your ship overnights in Barbados. Day-calling cruise ships should book the Oistins Fish Lover\'s Food Tour or Food and Heritage Tour for a daytime taste of Bajan seafood culture.',
      },
      {
        heading: 'What to Eat',
        content:
          'Flying fish, mahi-mahi, swordfish, and lobster rotate through menus depending on the catch. Sides include macaroni pie, coleslaw, and fried plantain. Try a Banks beer or rum punch. Bring cash in BBD or USD; ATMs are available in Oistins.',
      },
      {
        heading: 'Safety and Timing',
        content:
          'Oistins is popular and generally safe for tourists during fish fry hours. Stick to well-lit vendor areas, travel in groups, and pre-arrange taxi pickup for return. Never miss all-aboard for grilled fish — book organised food tours when your port day is short.',
      },
    ],
    relatedTours: ['barbados-food-and-heritage-tour', 'mount-gay-rum-distillery-tour', 'highlights-of-barbados'],
    relatedGuides: ['mount-gay-rum-distillery-guide', 'barbados-port-guide', 'is-barbados-safe-for-cruise-passengers'],
  },
  {
    slug: 'is-barbados-safe-for-cruise-passengers',
    title: 'Is Barbados Safe for Cruise Passengers? — Port Day Safety Guide',
    metaDescription:
      'Barbados safety guide for cruise passengers. Bridgetown port area safety, taxi tips, beach security, scams to avoid, and practical advice for your shore day.',
    image: '/images/bridgetown-port.jpg',
    imageAlt:
      'Bridgetown Barbados cruise port safety guide for cruise ship passengers exploring shore excursions.',
    intro:
      'Barbados is among the safer Caribbean destinations for cruise passengers, with a stable government, strong tourism infrastructure, and a welcoming culture. Common-sense precautions keep your Bridgetown port day smooth and enjoyable.',
    sections: [
      {
        heading: 'Bridgetown and Port Area Safety',
        content:
          'The cruise terminal and waterfront tourist zones are heavily trafficked and generally safe during daylight. Stick to main streets when walking to downtown Bridgetown. Avoid isolated areas after dark unless on an organised evening tour. Store valuables in your ship cabin; carry only what you need ashore.',
      },
      {
        heading: 'Taxis and Transportation',
        content:
          'Use licensed taxis from the official cruise terminal stand. Agree fares in advance. Avoid unlicensed drivers soliciting inside the port unless verified by terminal staff. Keep your ship\'s pier location card and emergency contact numbers handy.',
      },
      {
        heading: 'Beach and Water Safety',
        content:
          'Carlisle Bay\'s west-facing beaches have calm water suitable for swimming. East-coast beaches like Bathsheba have powerful surf — admire from lookout points unless with a knowledgeable guide. Wear reef-safe sunscreen and stay hydrated in tropical heat.',
      },
      {
        heading: 'Health and Emergency Info',
        content:
          'Barbados has modern medical facilities in Bridgetown. Drink bottled water if you have a sensitive stomach. Emergency services: dial 211 for police, 311 for fire, 511 for ambulance. US and UK consular services are available in Bridgetown for serious incidents.',
      },
    ],
    relatedTours: ['barbados-beach-day', 'highlights-of-barbados', 'barbados-food-and-heritage-tour'],
    relatedGuides: ['barbados-port-guide', 'can-you-explore-barbados-without-an-excursion', 'carlisle-bay-guide'],
  },
  {
    slug: 'can-you-explore-barbados-without-an-excursion',
    title: 'Can You Explore Barbados Without an Excursion? — DIY Port Guide',
    metaDescription:
      'Explore Barbados without a shore excursion. What cruise passengers can do independently from Bridgetown — Carlisle Bay walk, downtown shopping, taxis, and when to book tours.',
    image: '/images/hero-carlisle-bay.jpg',
    imageAlt:
      'Independent exploration of Carlisle Bay Barbados without a shore excursion from Bridgetown cruise port.',
    intro:
      'Yes — cruise passengers can explore significant parts of Barbados independently from Bridgetown. The key is matching DIY plans to your port hours and comfort with local transportation.',
    sections: [
      {
        heading: 'What Works Well Without a Tour',
        content:
          'Walking downtown Bridgetown for shopping and sightseeing. Taxis or walking to Carlisle Bay for beach and snorkelling. Mount Gay Rum visitor centre via taxi (15 minutes). Local restaurants and cafes in the capital. Duty-free shopping at the cruise terminal.',
      },
      {
        heading: 'What Is Better With an Organised Excursion',
        content:
          'Harrison\'s Cave (transport + timed entry). Turtle snorkel boat trips (equipment + boat access). East-coast scenic drives to Bathsheba. Discover Scuba and fishing charters. Any experience where guaranteed return-to-ship timing reduces stress.',
      },
      {
        heading: 'DIY Carlisle Bay Beach Day',
        content:
          'Walk or taxi to Carlisle Bay (1.5 miles from port). Pay day-pass at Boatyard or Pebbles for loungers and facilities, or find public beach access. Rent snorkel gear locally. Set alarms for return — allow 60–90 minutes before all-aboard for traffic and terminal security.',
      },
      {
        heading: 'Cost Comparison',
        content:
          'Independent Carlisle Bay day passes run $30–50 USD with rentals extra. Organised Barbados Beach Day excursions from $69 include transfers, loungers, and peace of mind. For distant attractions like Harrison\'s Cave, organised tours often match DIY taxi costs while adding guide value and ship guarantees.',
      },
    ],
    relatedTours: ['barbados-beach-day', 'harrisons-cave-tour', 'barbados-food-and-heritage-tour'],
    relatedGuides: ['barbados-port-guide', 'carlisle-bay-guide', 'one-day-in-barbados-from-a-cruise-ship'],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
