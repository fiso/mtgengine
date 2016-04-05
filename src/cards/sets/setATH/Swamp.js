"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Swamp extends UnimplementedCard {
  constructor(game) {
    super(game, "Swamp", "Anthologies", "ATH");
  }
}

module.exports = Swamp;
