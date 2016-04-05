"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scattershot extends UnimplementedCard {
  constructor(game) {
    super(game, "Scattershot", "Scourge", "SCG");
  }
}

module.exports = Scattershot;
