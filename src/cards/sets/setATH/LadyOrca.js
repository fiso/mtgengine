"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LadyOrca extends UnimplementedCard {
  constructor (game) {
    super(game, "Lady Orca", "Anthologies", "ATH");
  }
}

module.exports = LadyOrca;
