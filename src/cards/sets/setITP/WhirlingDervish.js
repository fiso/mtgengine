"use strict";
const Constants = require ("../../../Constants");
const WhirlingDervishBase = require("../setTSB/WhirlingDervish");

class WhirlingDervish extends WhirlingDervishBase {
  constructor (game) {
    super(game, "Whirling Dervish", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = WhirlingDervish;
