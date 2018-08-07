"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GarruksHorde extends UnimplementedCard {
  constructor (game) {
    super(game, "Garruk's Horde", "Welcome Deck 2017", "W17");
  }
}

module.exports = GarruksHorde;
