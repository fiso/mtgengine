"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PossessedSkaab extends UnimplementedCard {
  constructor (game) {
    super(game, "Possessed Skaab", "Magic Origins", "ORI");
  }
}

module.exports = PossessedSkaab;
