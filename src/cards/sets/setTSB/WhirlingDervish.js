"use strict";
const Constants = require ("../../../Constants");
const WhirlingDervishBase = require("../set5ED/WhirlingDervish");

class WhirlingDervish extends WhirlingDervishBase {
  constructor (game) {
    super(game, "Whirling Dervish", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = WhirlingDervish;
