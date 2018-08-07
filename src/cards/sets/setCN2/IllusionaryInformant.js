"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IllusionaryInformant extends UnimplementedCard {
  constructor (game) {
    super(game, "Illusionary Informant", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = IllusionaryInformant;
