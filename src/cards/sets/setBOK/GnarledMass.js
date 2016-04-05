"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GnarledMass extends UnimplementedCard {
  constructor(game) {
    super(game, "Gnarled Mass", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = GnarledMass;
