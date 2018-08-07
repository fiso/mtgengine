"use strict";
const Constants = require ("../../../Constants");
const MistbladeShinobiBase = require("../setPCA/MistbladeShinobi");

class MistbladeShinobi extends MistbladeShinobiBase {
  constructor (game) {
    super(game, "Mistblade Shinobi", "Planechase 2012", "PC2");
  }
}

module.exports = MistbladeShinobi;
