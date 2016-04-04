"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinPiledriverBase = require("../setpJGP/GoblinPiledriver.js");

class GoblinPiledriver extends GoblinPiledriverBase {
  constructor(game) {
    super(game, "Goblin Piledriver", "Magic Origins", "ORI");
  }
}

module.exports = GoblinPiledriver;
