"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhastlyRemains extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghastly Remains", "Legions", "LGN");
  }
}

module.exports = GhastlyRemains;
