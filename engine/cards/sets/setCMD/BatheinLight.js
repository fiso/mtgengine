"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BatheinLight extends Card {
  constructor(game) {
    super(game, "Bathe in Light", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = BatheinLight;
