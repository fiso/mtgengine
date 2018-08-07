"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GolgariSignet extends UnimplementedCard {
  constructor (game) {
    super(game, "Golgari Signet", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = GolgariSignet;
