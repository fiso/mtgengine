"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Forest extends UnimplementedCard {
  constructor (game) {
    super(game, "Forest", "Anthologies", "ATH");
  }
}

module.exports = Forest;
