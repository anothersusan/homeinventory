const braidChalkDrawing =   {
    "name": "Braid Chalk Drawing by Mason",
    "type": "arts_crafts",
    "location": "Living-Dining Room",
    "description": "Besides being a remarkably lovely detailed study of texture, curves, depth, and shadows, I am so proud Mason did this!"
  }

  const glassPaperWeight = {
    "name": "Orange Swirl Glass Paperweight",
    "type": "arts_crafts",
    "location": "Living-Dining Room",
    "description": "First glass-blown piece I ever did."
  }

  const milkFrother = {
    "name": "Capresso Milk Frother",
    "type": "appliance",
    "location": "Kitchen",
    "description": "Easy to use milk frother for coffee."
  }

  const frenchDresser = {
    "name": "French Burlwood Dresser",
    "type": "furniture",
    "location": "Foyer",
    "description": "Lovely wood with character-filled burl wood and marble top."
  }

  const chineseDesk = {
    "name": "Chinese Red Secretary Desk",
    "type": "furniture",
    "location": "Living-Dining Room",
    "description": "Bright red desk with folding writing surface. Lots of slots and drawers for correspondence materials"
  }

  const dartagnanPrint = {
    "name": "d'Artagnan Etching",
    "type": "arts_crafts",
    "location": "Living-Dining Room",
    "description": "Etching of actor in costume for d'Artagnan role. Fan poster of it's day in the early 1900s."
  }

  const martyToolchest = {
    "name": "Marty's Tool Chest",
    "type": "arts_crafts",
    "location": "Carter's Room",
    "description": "Small toolchest for draftsman's tools. Marty used it at the Bureau of Printing and Engraving."
  }

  const KitchenAid = {
    "name": "KitchenAid Mixer",
    "type": "appliance",
    "location": "kitchen",
    "description": "Stand-mixer is SO handy for baking."
  }

  const goldilockMugShot = {
    "name": "Goldilock's Mug Shot",
    "type": "arts_crafts",
    "location": "Carter's Room",
    "description": "Lithograph of Goldilock's mug shot for breaking and entering."
  }

  const oblongGoldPlatter = {
    "name": "Gold Leaf Rimmed Oblong Platter",
    "type": "arts_crafts",
    "location": "kitchen",
    "description": "Hand-blown long glass platter - besides being beautiful it is the perfect size for so many dishes and occassions."
  }


  let arts_crafts = []
  let appliance = []
  let furniture = []

  arts_crafts.push(glassPaperWeight, goldilockMugShot, oblongGoldPlatter, braidChalkDrawing, martyToolchest, dartagnanPrint)
  appliance.push(KitchenAid,milkFrother)
  furniture.push(frenchDresser, chineseDesk)

  let HomeInventory = {
    "arts_crafts": arts_crafts,
    "appliance": appliance,
    "furniture": furniture
  }

    for(var type in HomeInventory) {
        console.log(type); 
        for (var index = 0; index < HomeInventory[type].length; index++) {
          console.table(HomeInventory[type][index])
        }
    }

  const homeInventoryString = JSON.stringify(HomeInventory)
  localStorage.setItem("HomeInventory", homeInventoryString) 
