"use strict";
const Constants = require ("../../../Constants");
const HellkiteChargerBase = require("../setARC/HellkiteCharger");

class HellkiteCharger extends HellkiteChargerBase {
  constructor(game) {
    super(game, "Hellkite Charger", "Zendikar", "ZEN");
  }
}

module.exports = HellkiteCharger;
