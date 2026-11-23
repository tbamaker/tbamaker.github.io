// Trying to be a Maker — i contenuti delle pagine delle singole edizioni (edition.html?e=<id>).
// Nome, stato e disegno vengono da editions.js; qui ci sono solo testo, punti e schermate.
// Schermate: img/edizioni/<id>/{home,page2,apps,stats,sleep}.png, fotografate da un X3 vero
// (02_EDIZIONI/edizioni/<id>/anteprime/prova_en_*.png). Le copertine dei libri sono coperte.
window.IM_EDITION_PAGES = {
  dungeon: {
    tagline: "Every book is a *boss* to beat",
    intro: "Reading becomes a dungeon run. The book you are reading is the boss of the floor, with a health bar that drops with every page. A System AI with a dry sense of humour announces your achievements, and a companion you name grows as you read.",
    points: [
      ["Boss fights", "The book's health bar drops as you read. Finish it to go down a floor: victory screen, a 1-to-5 rating and an entry in your reading journal."],
      ["A companion", "Dragon, dinosaur or owl. It hatches from an egg and grows through four ages. Skip a few days and it gets hungry. Then sad."],
      ["The System has opinions", "Endless achievements, each with a loot box and a comment. The lines live in a text file on the card: write your own."],
      ["Missions and an audience", "Daily, weekly and monthly missions, an imaginary audience with comments, and a weekly report."],
      ["Everything else", "Reading timer, day-by-day stats, quote of the day, weather and a progress backup to the SD card."]
    ],
    cast: { title: "Pick your companion", items: [["img/drago.png", "Dragon", "Puffs smoke when happy."], ["img/dino.png", "Dinosaur", "Fast, curious, bites pillows."], ["img/gufo.png", "Owl", "Watches you read. Judges."]] },
    screens: {
      home: "Home: the boss of the floor is your book. Energy, next book and your companion below.",
      page2: "Second page: quote of the day, weather, your numbers, missions and the show.",
      apps: "Apps: timer, missions, crawler library, quotes, transfer, trophies, backup.",
      stats: "Stats: the last seven days and your character sheet.",
      sleep: "The safe room: your companion sleeps while the reader does."
    }
  },
  cats: {
    tagline: "You live with a *cat* now",
    intro: "A cat moves into your reader and talks to you, its human, in first person. It notices when you read and, more often, when you do not. Its own home screen, its own sleep screen, its own rounded font.",
    points: [
      ["Three cats", "Grey, tabby, or black and white. You pick one and give it a name."],
      ["It talks", "A speech bubble on the home screen, with strong opinions about your reading habits."],
      ["Cat logic", "Demands instead of missions. Catches instead of trophies: things it brought you. Finished books become finished yarn."],
      ["A design of its own", "Light and calm, with the Fredoka font, made only for this edition."],
      ["Do not disturb", "When the reader sleeps, so does the cat, curled up next to its ball of yarn."]
    ],
    cast: { title: "Your cat", items: [["img/gatto.png", "Awake", "Grey, tabby, or black and white."], ["img/gatto_dorme.png", "Asleep", "Next to its ball of yarn."]] },
    screens: {
      home: "Home: the cat, what it thinks of you, and the book you are unravelling.",
      page2: "Second page: quote, weather, your numbers and the cat's demands.",
      apps: "Apps, renamed by the cat: finished yarn, catches, your cat.",
      stats: "Stats: the last seven days and your numbers.",
      sleep: "Do not disturb the cat."
    }
  },
  garden: {
    tagline: "Your reading grows a *plant*",
    intro: "The gentle edition. A small plant in a terracotta pot sprouts, grows and blooms as you read. The voice is a calm almanac, not a sarcastic System, and it never tells you off.",
    points: [
      ["A plant that grows", "From seed to bloom as you read. Stop for a while and it wilts a little, then waits for you."],
      ["The shed", "A second page with the quote of the day, the weather, your numbers and a few little tasks."],
      ["Garden words", "Little tasks instead of missions, blooms instead of trophies, a herbarium of finished books."],
      ["Its own type", "A serif font (Fraunces), with the quotes in italics, made only for this edition."],
      ["Goodnight, garden", "A quiet sleep screen: no noise, no notifications."]
    ],
    cast: { title: "Your plant", items: [["img/pianta.png", "The plant", "A terracotta pot with a small face."]] },
    screens: {
      home: "Home: the plant, how it feels, and the book growing along a branch.",
      page2: "The shed: quote, weather, numbers and little tasks.",
      apps: "Apps: herbarium, blooms, your garden, your plant.",
      stats: "Stats: the last seven days and your numbers.",
      sleep: "Goodnight, garden."
    }
  },
  copilot: {
    tagline: "An on-board *instrument*",
    intro: "Your reader becomes a cockpit gauge, white on black. A big dial fills as you read and shows the arrival time at the last page. A dry, polite assistant you name yourself keeps the log.",
    points: [
      ["The dial", "Time, your book and the percentage in a single round gauge that fills page after page."],
      ["An assistant", "You choose its name. Short, dry status reports. Never rude."],
      ["Ship's vocabulary", "Directives instead of missions, upgrades instead of trophies, a pilot file instead of a character sheet."],
      ["Its own type", "A technical font (Chakra Petch), made only for this edition."],
      ["Standby", "When the reader sleeps, the systems rest."]
    ],
    cast: { title: "The core", items: [["svg:core", "The core", "It charges with every page."]] },
    screens: {
      home: "Home: the dial with your book, the assistant's report and today's numbers.",
      page2: "Second page: quote, weather, numbers, directives and the log.",
      apps: "Apps: archive, upgrades, pilot file, assistant.",
      stats: "Stats: the last seven days and your numbers.",
      sleep: "Standby: the modules are waiting."
    }
  },
  desktop: {
    tagline: "An old *computer* desktop",
    intro: "Your e-reader dresses up as a computer from another decade: windows with striped title bars, a floppy disk with a face, and the reader's own menus in a menu bar on top.",
    points: [
      ["Open document", "Your book sits in a window, with a scroll bar that shows how far you got."],
      ["A disk with a face", "You give it a name. Leave it alone for days and it gathers dust."],
      ["Desktop vocabulary", "Tasks, stickers instead of trophies, and a BBS full of users online."],
      ["Its own type", "A pixel font (Jersey) and a dithered grey desktop."],
      ["System paused", "A classic alert box as the sleep screen. It is now safe to turn off the lamp."]
    ],
    cast: { title: "Your disk", items: [["svg:disk", "The disk", "It has a name and a mood."]] },
    screens: {
      home: "Home: the open document, the disk and today's reading, with the menu bar on top.",
      page2: "Second page: quote, weather, numbers, tasks and the BBS.",
      apps: "Apps: archive, stickers, get info, your disk.",
      stats: "Stats: the last seven days and your numbers.",
      sleep: "System paused."
    }
  },
  arcade: {
    tagline: "Your book is a *platform* level",
    intro: "Every book is a level. A small ninja runs toward the flag as you read, between blocks, stars and clouds. And when you want a break, there is a mini-game where reading earns you lives.",
    points: [
      ["The level", "The home screen is the level: the further you read, the closer the ninja gets to the flag."],
      ["Star Run", "A platform game played one move at a time, with a hundred levels. Every reading star you earn today is an extra life, up to three."],
      ["Game vocabulary", "Quests, trophies, a player card and a chat full of followers."],
      ["Its own type", "A pixel font (Press Start 2P) and a night-time pause screen."],
      ["All original", "No characters or elements from existing games: the ninja and the levels were drawn for this edition."]
    ],
    cast: { title: "Your hero", items: [["svg:ninja", "The ninja", "Sword on the back, always running."]] },
    screens: {
      home: "Home: the level, your book and the ninja on the way to the flag.",
      page2: "Second page: quote, weather, numbers, quests and the chat.",
      apps: "Apps: cleared levels, trophies, player card, your hero.",
      stats: "Stats: the last seven days and your numbers.",
      sleep: "Pause. The level will wait."
    }
  }
};
