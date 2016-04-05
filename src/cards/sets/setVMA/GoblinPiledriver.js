"use strict";
const Constants = require ("../../../Constants");
const GoblinPiledriverBase = require("../setpJGP/GoblinPiledriver");

class GoblinPiledriver extends GoblinPiledriverBase {
  constructor(game) {
    super(game, "Goblin Piledriver", "Vintage Masters", "VMA");
  }
}

module.exports = GoblinPiledriver;
