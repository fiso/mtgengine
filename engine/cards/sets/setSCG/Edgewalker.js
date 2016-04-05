"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Edgewalker extends UnimplementedCard {
  constructor(game) {
    super(game, "Edgewalker", "Scourge", "SCG");
  }
}

module.exports = Edgewalker;
