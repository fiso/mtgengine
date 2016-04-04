"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GutturalResponse extends Card {
  constructor(game) {
    super(game, "Guttural Response", "Shadowmoor", "SHM");
  }
}

module.exports = GutturalResponse;
