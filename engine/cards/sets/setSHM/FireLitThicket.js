"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FireLitThicket extends Card {
  constructor(game) {
    super(game, "Fire-Lit Thicket", "Shadowmoor", "SHM");
  }
}

module.exports = FireLitThicket;
