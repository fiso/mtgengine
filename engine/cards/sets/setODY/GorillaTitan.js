"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GorillaTitan extends UnimplementedCard {
  constructor(game) {
    super(game, "Gorilla Titan", "Odyssey", "ODY");
  }
}

module.exports = GorillaTitan;
