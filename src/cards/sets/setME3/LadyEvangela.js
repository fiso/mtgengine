"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LadyEvangela extends UnimplementedCard {
  constructor (game) {
    super(game, "Lady Evangela", "Masters Edition III", "ME3");
  }
}

module.exports = LadyEvangela;
