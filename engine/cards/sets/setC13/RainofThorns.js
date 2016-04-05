"use strict";
const Constants = require ("../../../Constants");
const RainofThornsBase = require("../setAVR/RainofThorns");

class RainofThorns extends RainofThornsBase {
  constructor(game) {
    super(game, "Rain of Thorns", "Commander 2013 Edition", "C13");
  }
}

module.exports = RainofThorns;
