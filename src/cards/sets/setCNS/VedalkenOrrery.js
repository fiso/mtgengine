"use strict";
const Constants = require ("../../../Constants");
const VedalkenOrreryBase = require("../set5DN/VedalkenOrrery");

class VedalkenOrrery extends VedalkenOrreryBase {
  constructor (game) {
    super(game, "Vedalken Orrery", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = VedalkenOrrery;
