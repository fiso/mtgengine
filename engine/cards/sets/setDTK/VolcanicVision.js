"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VolcanicVision extends Card {
  constructor(game) {
    super(game, "Volcanic Vision", "Dragons of Tarkir", "DTK");
  }
}

module.exports = VolcanicVision;
