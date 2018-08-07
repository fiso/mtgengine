"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalduvianHydra extends UnimplementedCard {
  constructor (game) {
    super(game, "Balduvian Hydra", "Masters Edition II", "ME2");
  }
}

module.exports = BalduvianHydra;
