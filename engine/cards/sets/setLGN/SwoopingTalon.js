"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SwoopingTalon extends Card {
  constructor(game) {
    super(game, "Swooping Talon", "Legions", "LGN");
  }
}

module.exports = SwoopingTalon;
