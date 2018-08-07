"use strict";
const Constants = require ("../../../Constants");
const GoblinPiledriverBase = require("../setPORI/GoblinPiledriver");

class GoblinPiledriver extends GoblinPiledriverBase {
  constructor (game) {
    super(game, "Goblin Piledriver", "Judge Gift Cards 2008", "G08");
  }
}

module.exports = GoblinPiledriver;
