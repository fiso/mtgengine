"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LadyEvangela extends UnimplementedCard {
  constructor(game) {
    super(game, "Lady Evangela", "Legends", "LEG");
  }
}

module.exports = LadyEvangela;
