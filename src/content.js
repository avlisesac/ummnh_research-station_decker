// For videos, use youtube
// For images, put them in the public>images folder and refer to them with
// '/images/yourimage.jpg' syntax.

export default {
  // Page Content
  page: {
    title: "Leslie Decker: Butterflies in Peril"
  },

  // Main Content
  // example:
  // -- A video asset --
  // {
  //   title: "Meet Valeriy Ivanov",
  //   text: `Valeriy Ivanov, PhD, is Associate Professor in the Department of Civil and Environmental Engineering at the University of Michigan.\nSupported by the National Science Foundation.`,
  //   video: "https://youtu.be/lJrYeFYx374"
  // },
  // -- An image asset --
  // {
  //   title: "Field Site Location",
  //   text: `Ivanov currently works in Western Siberia in Russia, at the northern tip of the Polar Urals, or the southern peninsula of the Yamal region. The site is remote, so there is no human impact and it is far away from reindeer migration paths.`,
  //   image: {
  //     source: "images/yourimage.png",
  // -- Text to use for screen-readers or hover or image breakage --
  //     desc: "Map of locations and images of budget towers"
  //   }
  // },
  main: [
    {
      title: "Meet Leslie Decker",
      text: `Leslie Decker received her Ph.D. in Ecology and Evolutionary Biology at the University of Michigan. She is currently a Postdoctoral Scholar at Stanford University.`,
      video: "https://youtu.be/aewlnE12bjw"
    },
    {
      title: "Milkweed in the Midwest",
      text: `Monarch butterflies are notoriously picky eaters. They only feed off plants of the genus Asclepias, commonly known as milkweed, which are also the only plants monarchs lay their eggs on. Decker and her colleagues experimented with four types of milkweed.`,
      image: {
        source: "/images/Decker_02a_MilkweedTypes.png",
        desc: "Image showing four types of Milkweed: Swamp milkweed, Showy milkweed, Common milkweed, and Tropical milkweed."
      }
    },
    {
      title: "Toxic medicine",
      text: `Milkweed is well known for making toxins called cardenolides. These toxins make monarchs taste bitter to predators, and also help protect against parasites.`,
      video: "https://youtu.be/1iqWhFzINHk"
    },
    {
      title: "Studying plant-insect interactions",
      text: `For her dissertation at the University of Michigan, Decker investigated what happens when elevated carbon dioxide levels alter the chemical qualities of milkweed. She also studied the effects of these changes on how monarchs defend themselves from natural enemies.`,
      video: "https://youtu.be/VDpzAmqRI7c"
    },
    {
      title: "Seeing changes in plant compounds",
      text: `Decker's research shows changes in the medicinal compounds of milkweed. As temperatures rise and the atmosphere changes, other plants are changing their compounds, too.`,
      video: "https://youtu.be/YTPJDIAML28"
    },
    {
      title: "Decker's current research project at Stanford",
      text: `Decker is currently researching how microbes in flower nectar interact with plant pollinators.`,
      video: "https://youtu.be/3Ru1wgGDffo"
    },
  ],
  // Secondary Content
  // example:
  // Item with an accompanying image
  // {
  //   title: "Runaway melt",
  //   text: `In the far north, buried soil known as permafrost used to stay frozen year round. But the Arctic is warming more quickly than the rest of the planet. Each summer, more frozen land thaws for a longer time. Scientists are working to explain why the thaw is outpacing even their worst case predictions. The mystery is urgent--melting permafrost releases carbon dioxide, a gas that accelerates the pace of global warming.`,
  //   image: {
  //     source: "images/yourimage.png",
  // -- Text to use for screen-readers or hover or image breakage --
  //     desc: "Comparitive photos of treeline",
  // -- Text for small caption below image --
  //     caption:
  //       "Scientists remain puzzled why Arctic permafrost is melting more quickly than expected. Here, a chunk of coastal permafrost in Alaska drops into the sea.\nUSGS"
  //   }
  // },
  // Text-only item
  // {
  //   title: "Understanding the vicious cycle of global warming",
  //   text: `U-M researchers studying the warming Arctic witness firsthand the effects of climate change. They track the movement of heat energy from the Sun to air, water, and soil. They note the northward creep of the tree line, with shrubs and forests emerging where none have grown for thousands of years.\nThe carbon trapped in the permafrost is greater than that contained in the entire Amazon rainforest.\nCurrently, there is a vicious cycle, in which the Arctic warms, the permafrost thaws, //   carbon is released, and warming accelerates. U-M researchers led by Valeriy Ivanov are working with other partner universities to monitor feedback mechanisms accelerating Artic climate warming, and determine all the factors and interactions that are affecting the permafrost.`
  // }
  secondary: [
    {
      title: "Missing monarchs",
      text: `Few sights can match that of monarch butterflies fluttering by the thousands on their fall migration from Canada to Mexico. But the monarch population is in decline for many reasons. Habitat loss, global warming, and elevated levels of atmospheric carbon dioxide affect both the butterflies and their milkweed hosts. Despite the scale of monarch decline worldwide, researchers have discovered many practical, small-scale actions that can help preserve their numbers.\n
      Leslie and her colleagues have identied ways people can help:
      • Plant species of milkweed native to your area—don’t import invasive species from elsewhere.
      • Do not use monarchs as decoration or hire butterfly release services.
      • Avoid herbicides that kill milkweeds.
      Actions such as these can help ensure monarchs’ survival.`,
      image: {
        source: "/images/PanelImage.png",
        desc: "Image of a monarch butterfly on a milkweed plant.",
        caption:
          `Climate change, habitat destruction, and invasive species have all put the majestic monarch butterfly in peril.`
      }
    },
    {
      title: "Protecting monarchs",
      text: `Monarch butterflies lay their eggs exclusively on milkweeds. After hatching, caterpillars feed on milkweed leaves, which contain chemicals toxic to a common monarch parasite. Former U-M PhD student Leslie Decker discovered that increased carbon-dioxide levels strip milkweeds of their medicinal properties. Herbicides, habitat loss, parasites, and climate change all aect monarch butterflies.`
    }
  ],
  // Additional credit if needed
  credits: [
    // {
    //   image: "/images/nsfLogo.png",
    //   desc: "National Science Foundation Logo",
    //   link: "https://www.nsf.gov/"
    // }
  ]
};
