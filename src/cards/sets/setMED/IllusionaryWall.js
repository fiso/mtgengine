"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IllusionaryWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Illusionary Wall", "Masters Edition", "MED");
  }
}

module.exports = IllusionaryWall;
