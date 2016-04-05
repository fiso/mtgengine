"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Resupply extends UnimplementedCard {
  constructor(game) {
    super(game, "Resupply", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Resupply;
