"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InnocentBlood extends UnimplementedCard {
  constructor (game) {
    super(game, "Innocent Blood", "Explorers of Ixalan", "E02");
  }
}

module.exports = InnocentBlood;
