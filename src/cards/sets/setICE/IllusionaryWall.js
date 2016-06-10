"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IllusionaryWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Illusionary Wall", "Ice Age", "ICE");
  }
}

module.exports = IllusionaryWall;
