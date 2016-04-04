"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TimmyPowerGamer extends Card {
  constructor(game) {
    super(game, "Timmy, Power Gamer", "Unglued", "UGL");
  }
}

module.exports = TimmyPowerGamer;
