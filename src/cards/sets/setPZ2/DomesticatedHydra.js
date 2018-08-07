"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DomesticatedHydra extends UnimplementedCard {
  constructor (game) {
    super(game, "Domesticated Hydra", "You Make the Cube", "PZ2");
  }
}

module.exports = DomesticatedHydra;
