"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Unsummon extends UnimplementedCard {
  constructor (game) {
    super(game, "Unsummon", "Explorers of Ixalan", "E02");
  }
}

module.exports = Unsummon;
