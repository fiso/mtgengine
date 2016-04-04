"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MistbladeShinobiBase = require("../setBOK/MistbladeShinobi.js");

class MistbladeShinobi extends MistbladeShinobiBase {
  constructor(game) {
    super(game, "Mistblade Shinobi", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = MistbladeShinobi;
