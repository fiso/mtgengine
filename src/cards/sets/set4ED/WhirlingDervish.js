"use strict";
const Constants = require ("../../../Constants");
const WhirlingDervishBase = require("../set5ED/WhirlingDervish");

class WhirlingDervish extends WhirlingDervishBase {
  constructor (game) {
    super(game, "Whirling Dervish", "Fourth Edition", "4ED");
  }
}

module.exports = WhirlingDervish;
