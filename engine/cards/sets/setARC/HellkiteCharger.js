"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HellkiteCharger extends Card {
  constructor(game) {
    super(game, "Hellkite Charger", "Archenemy", "ARC");
  }
}

module.exports = HellkiteCharger;
