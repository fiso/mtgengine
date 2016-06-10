"use strict";
const Constants = require ("../../../Constants");
const GrimFloweringBase = require("../setC14/GrimFlowering");

class GrimFlowering extends GrimFloweringBase {
  constructor (game) {
    super(game, "Grim Flowering", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = GrimFlowering;
