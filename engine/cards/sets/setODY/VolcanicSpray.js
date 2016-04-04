"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VolcanicSpray extends Card {
  constructor(game) {
    super(game, "Volcanic Spray", "Odyssey", "ODY");
  }
}

module.exports = VolcanicSpray;
