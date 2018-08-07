"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormscapeApprentice extends UnimplementedCard {
  constructor (game) {
    super(game, "Stormscape Apprentice", "Invasion", "INV");
  }
}

module.exports = StormscapeApprentice;
