"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampireNoble extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampire Noble", "Explorers of Ixalan", "E02");
  }
}

module.exports = VampireNoble;
