"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElephantGrass extends UnimplementedCard {
  constructor(game) {
    super(game, "Elephant Grass", "Visions", "VIS");
  }
}

module.exports = ElephantGrass;
