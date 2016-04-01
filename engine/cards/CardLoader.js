"use strict";
const UnimplementedCard = require("./UnimplementedCard");

const sets = {
  "debugset": {
    "Mountain": require("../cards/BasicMountain"),
    "Lightning Bolt": require("../cards/LightningBolt"),
    "Goblin Bully": require("../cards/GoblinBully")
  }
};

class CardLoader {
  constructor (name, set, callback, game) {
    let chosenSet = undefined;
    if (set) {
      if (sets[set]) {
        chosenSet = sets[set];
      }
    }
    let foundClass = false;
    for (let setName in sets) {
      if (sets[setName][name]) {
        new sets[setName][name](game, callback);
        foundClass = true;
      }
    }

    if (!foundClass) {
      new UnimplementedCard(game, callback, name, set);
    }
  }
}

module.exports = CardLoader;
