"use strict";
const Constants = require ("../../../Constants");
const VedalkenOrreryBase = require("../setCNS/VedalkenOrrery");

class VedalkenOrrery extends VedalkenOrreryBase {
  constructor (game) {
    super(game, "Vedalken Orrery", "Fifth Dawn", "5DN");
  }
}

module.exports = VedalkenOrrery;
