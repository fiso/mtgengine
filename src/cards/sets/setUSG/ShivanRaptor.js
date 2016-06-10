"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShivanRaptor extends UnimplementedCard {
  constructor (game) {
    super(game, "Shivan Raptor", "Urza's Saga", "USG");
  }
}

module.exports = ShivanRaptor;
