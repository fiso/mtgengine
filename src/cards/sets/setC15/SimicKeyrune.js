"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SimicKeyrune extends UnimplementedCard {
  constructor (game) {
    super(game, "Simic Keyrune", "Commander 2015", "C15");
  }
}

module.exports = SimicKeyrune;
