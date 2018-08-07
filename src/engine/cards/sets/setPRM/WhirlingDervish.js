"use strict";
const Constants = require ("../../../Constants");
const WhirlingDervishBase = require("../setTSB/WhirlingDervish");

class WhirlingDervish extends WhirlingDervishBase {
  constructor (game) {
    super(game, "Whirling Dervish", "Magic Online Promos", "PRM");
  }
}

module.exports = WhirlingDervish;
