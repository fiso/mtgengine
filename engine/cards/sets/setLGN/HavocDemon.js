"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HavocDemon extends Card {
  constructor(game) {
    super(game, "Havoc Demon", "Legions", "LGN");
  }
}

module.exports = HavocDemon;
