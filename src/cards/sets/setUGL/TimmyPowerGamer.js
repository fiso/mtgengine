"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimmyPowerGamer extends UnimplementedCard {
  constructor (game) {
    super(game, "Timmy, Power Gamer", "Unglued", "UGL");
  }
}

module.exports = TimmyPowerGamer;
