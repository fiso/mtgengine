"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mountain extends Card {
  constructor(game) {
    super(game, "Mountain", "Anthologies", "ATH");
  }
}

module.exports = Mountain;
