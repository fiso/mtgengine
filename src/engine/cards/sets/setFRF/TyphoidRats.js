"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TyphoidRats extends UnimplementedCard {
  constructor (game) {
    super(game, "Typhoid Rats", "Fate Reforged", "FRF");
  }
}

module.exports = TyphoidRats;
