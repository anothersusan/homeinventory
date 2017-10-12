const storedInventory = JSON.parse(localStorage.getItem("HomeInventory"))

const foo = {
    "name": "Shooting for the Moon Bank",
    "type": "arts_crafts",
    "location": "Carter's Room",
    "description": "My father's old coin bank with a little rocket that shoots coins into a slot in the moon."
  }

storedInventory.arts_crafts.push(foo)

console.table(storedInventory.arts_crafts) 
console.table(storedInventory.furniture) 
console.table(storedInventory.appliance) 

const storedInventoryString = JSON.stringify(storedInventory)
localStorage.setItem("HomeInventory", storedInventoryString) 
