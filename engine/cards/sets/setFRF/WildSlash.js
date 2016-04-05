"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildSlash extends UnimplementedCard {
  constructor(game) {
    super(game, "Wild Slash", "Fate Reforged", "FRF");
  }
}

module.exports = WildSlash;
