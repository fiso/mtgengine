"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampireNighthawk extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampire Nighthawk", "Explorers of Ixalan", "E02");
  }
}

module.exports = VampireNighthawk;
