"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StripMine extends UnimplementedCard {
  constructor(game) {
    super(game, "Strip Mine", "Anthologies", "ATH");
  }
}

module.exports = StripMine;
