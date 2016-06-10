"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PresstheAdvantage extends UnimplementedCard {
  constructor (game) {
    super(game, "Press the Advantage", "Dragons of Tarkir", "DTK");
  }
}

module.exports = PresstheAdvantage;
