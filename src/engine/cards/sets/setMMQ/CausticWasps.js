"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CausticWasps extends UnimplementedCard {
  constructor (game) {
    super(game, "Caustic Wasps", "Mercadian Masques", "MMQ");
  }
}

module.exports = CausticWasps;
