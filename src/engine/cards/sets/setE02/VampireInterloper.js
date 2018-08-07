"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampireInterloper extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampire Interloper", "Explorers of Ixalan", "E02");
  }
}

module.exports = VampireInterloper;
