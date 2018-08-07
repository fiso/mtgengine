"use strict";
const Constants = require ("../../../Constants");
const FreneticEfreetBase = require("../setWC97/FreneticEfreet");

class FreneticEfreet extends FreneticEfreetBase {
  constructor (game) {
    super(game, "Frenetic Efreet", "Mirage", "MIR");
  }
}

module.exports = FreneticEfreet;
