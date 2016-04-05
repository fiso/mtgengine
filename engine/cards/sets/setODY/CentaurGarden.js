"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CentaurGarden extends UnimplementedCard {
  constructor(game) {
    super(game, "Centaur Garden", "Odyssey", "ODY");
  }
}

module.exports = CentaurGarden;
