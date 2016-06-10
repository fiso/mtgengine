"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TwilightMire extends UnimplementedCard {
  constructor (game) {
    super(game, "Twilight Mire", "Eventide", "EVE");
  }
}

module.exports = TwilightMire;
