"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LadyOrca extends UnimplementedCard {
  constructor (game) {
    super(game, "Lady Orca", "Masters Edition III", "ME3");
  }
}

module.exports = LadyOrca;
