"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChurningEddy extends UnimplementedCard {
  constructor(game) {
    super(game, "Churning Eddy", "Torment", "TOR");
  }
}

module.exports = ChurningEddy;
