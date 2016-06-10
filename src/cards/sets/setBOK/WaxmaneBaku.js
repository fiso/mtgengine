"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaxmaneBaku extends UnimplementedCard {
  constructor (game) {
    super(game, "Waxmane Baku", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = WaxmaneBaku;
