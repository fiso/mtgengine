"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IllusionaryServant extends UnimplementedCard {
  constructor (game) {
    super(game, "Illusionary Servant", "Magic 2010", "M10");
  }
}

module.exports = IllusionaryServant;
