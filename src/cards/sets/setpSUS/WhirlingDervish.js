"use strict";
const Constants = require ("../../../Constants");
const WhirlingDervishBase = require("../setTSB/WhirlingDervish");

class WhirlingDervish extends WhirlingDervishBase {
  constructor (game) {
    super(game, "Whirling Dervish", "Junior Super Series", "PSUS");
  }
}

module.exports = WhirlingDervish;
