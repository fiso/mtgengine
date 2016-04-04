"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChildhoodHorror extends UnimplementedCard {
  constructor(game) {
    super(game, "Childhood Horror", "Odyssey", "ODY");
  }
}

module.exports = ChildhoodHorror;
