"use strict";
const Constants = require ("../../../Constants");
const HellkiteChargerBase = require("../setARC/HellkiteCharger");

class HellkiteCharger extends HellkiteChargerBase {
  constructor (game) {
    super(game, "Hellkite Charger", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = HellkiteCharger;
