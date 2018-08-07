"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VowofLightning extends UnimplementedCard {
  constructor (game) {
    super(game, "Vow of Lightning", "Explorers of Ixalan", "E02");
  }
}

module.exports = VowofLightning;
