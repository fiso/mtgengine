"use strict";

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
    Object.keys(sets).forEach(setName => {
      if (sets[setName][name]) {
        callback (new sets[setName][name](game));
      }
    });
  }
}

module.exports = CardLoader;
