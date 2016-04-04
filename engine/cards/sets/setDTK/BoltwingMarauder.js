"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoltwingMarauder extends UnimplementedCard {
  constructor(game) {
    super(game, "Boltwing Marauder", "Dragons of Tarkir", "DTK");
  }
}

module.exports = BoltwingMarauder;
