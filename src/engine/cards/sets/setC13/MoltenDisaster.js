"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoltenDisaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Molten Disaster", "Commander 2013", "C13");
  }
}

module.exports = MoltenDisaster;
