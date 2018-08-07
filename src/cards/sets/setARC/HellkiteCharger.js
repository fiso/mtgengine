"use strict";
const Constants = require ("../../../Constants");
const HellkiteChargerBase = require("../setC17/HellkiteCharger");

class HellkiteCharger extends HellkiteChargerBase {
  constructor (game) {
    super(game, "Hellkite Charger", "Archenemy", "ARC");
  }
}

module.exports = HellkiteCharger;
