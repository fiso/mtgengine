"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LlanowarElves extends UnimplementedCard {
  constructor(game) {
    super(game, "Llanowar Elves", "Anthologies", "ATH");
  }
}

module.exports = LlanowarElves;
