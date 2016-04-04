"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PoisonArrow extends Card {
  constructor(game) {
    super(game, "Poison Arrow", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = PoisonArrow;
