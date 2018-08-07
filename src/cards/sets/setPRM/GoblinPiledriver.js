"use strict";
const Constants = require ("../../../Constants");
const GoblinPiledriverBase = require("../setPORI/GoblinPiledriver");

class GoblinPiledriver extends GoblinPiledriverBase {
  constructor (game) {
    super(game, "Goblin Piledriver", "Magic Online Promos", "PRM");
  }
}

module.exports = GoblinPiledriver;
