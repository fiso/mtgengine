"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StillmoonCavalier extends UnimplementedCard {
  constructor(game) {
    super(game, "Stillmoon Cavalier", "Eventide", "EVE");
  }
}

module.exports = StillmoonCavalier;
