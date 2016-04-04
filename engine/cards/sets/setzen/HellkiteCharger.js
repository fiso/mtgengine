"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HellkiteChargerBase = require("../setARC/HellkiteCharger.js");

class HellkiteCharger extends HellkiteChargerBase {
  constructor(game) {
    super(game, "Hellkite Charger", "Zendikar", "ZEN");
  }
}

module.exports = HellkiteCharger;
