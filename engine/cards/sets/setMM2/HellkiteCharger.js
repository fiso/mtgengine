"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HellkiteChargerBase = require("../setARC/HellkiteCharger.js");

class HellkiteCharger extends HellkiteChargerBase {
  constructor(game) {
    super(game, "Hellkite Charger", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = HellkiteCharger;
