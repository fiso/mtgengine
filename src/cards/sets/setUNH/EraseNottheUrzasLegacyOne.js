"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EraseNottheUrzasLegacyOne extends UnimplementedCard {
  constructor (game) {
    super(game, "Erase (Not the Urza's Legacy One)", "Unhinged", "UNH");
  }
}

module.exports = EraseNottheUrzasLegacyOne;
