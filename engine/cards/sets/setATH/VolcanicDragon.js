"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VolcanicDragon extends Card {
  constructor(game) {
    super(game, "Volcanic Dragon", "Anthologies", "ATH");
  }
}

module.exports = VolcanicDragon;
