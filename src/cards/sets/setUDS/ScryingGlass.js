"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScryingGlass extends UnimplementedCard {
  constructor (game) {
    super(game, "Scrying Glass", "Urza's Destiny", "UDS");
  }
}

module.exports = ScryingGlass;
