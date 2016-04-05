"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GateSmasher extends UnimplementedCard {
  constructor(game) {
    super(game, "Gate Smasher", "Dragons of Tarkir", "DTK");
  }
}

module.exports = GateSmasher;
