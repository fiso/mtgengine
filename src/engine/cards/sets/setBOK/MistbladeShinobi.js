"use strict";
const Constants = require ("../../../Constants");
const MistbladeShinobiBase = require("../setPCA/MistbladeShinobi");

class MistbladeShinobi extends MistbladeShinobiBase {
  constructor (game) {
    super(game, "Mistblade Shinobi", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = MistbladeShinobi;
