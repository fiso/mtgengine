"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PresstheAdvantage extends Card {
  constructor(game) {
    super(game, "Press the Advantage", "Dragons of Tarkir", "DTK");
  }
}

module.exports = PresstheAdvantage;
