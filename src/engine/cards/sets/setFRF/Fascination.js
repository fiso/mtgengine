"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fascination extends UnimplementedCard {
  constructor (game) {
    super(game, "Fascination", "Fate Reforged", "FRF");
  }
}

module.exports = Fascination;
