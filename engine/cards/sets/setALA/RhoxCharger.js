"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RhoxCharger extends Card {
  constructor(game) {
    super(game, "Rhox Charger", "Shards of Alara", "ALA");
  }
}

module.exports = RhoxCharger;
