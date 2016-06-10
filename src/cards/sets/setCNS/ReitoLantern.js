"use strict";
const Constants = require ("../../../Constants");
const ReitoLanternBase = require("../setCHK/ReitoLantern");

class ReitoLantern extends ReitoLanternBase {
  constructor (game) {
    super(game, "Reito Lantern", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = ReitoLantern;
