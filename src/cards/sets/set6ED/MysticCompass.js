"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticCompass extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystic Compass", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MysticCompass;
