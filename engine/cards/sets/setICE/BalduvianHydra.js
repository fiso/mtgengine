"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalduvianHydra extends UnimplementedCard {
  constructor(game) {
    super(game, "Balduvian Hydra", "Ice Age", "ICE");
  }
}

module.exports = BalduvianHydra;
