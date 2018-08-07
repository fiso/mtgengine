"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeareroftheHeavens extends UnimplementedCard {
  constructor (game) {
    super(game, "Bearer of the Heavens", "Journey into Nyx", "JOU");
  }
}

module.exports = BeareroftheHeavens;
