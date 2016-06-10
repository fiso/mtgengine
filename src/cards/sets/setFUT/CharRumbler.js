"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CharRumbler extends UnimplementedCard {
  constructor (game) {
    super(game, "Char-Rumbler", "Future Sight", "FUT");
  }
}

module.exports = CharRumbler;
