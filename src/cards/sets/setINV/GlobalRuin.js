"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlobalRuin extends UnimplementedCard {
  constructor (game) {
    super(game, "Global Ruin", "Invasion", "INV");
  }
}

module.exports = GlobalRuin;
