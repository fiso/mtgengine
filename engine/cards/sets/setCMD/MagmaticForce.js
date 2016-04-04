"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagmaticForce extends Card {
  constructor(game) {
    super(game, "Magmatic Force", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = MagmaticForce;
