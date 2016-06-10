"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SangriteSurge extends UnimplementedCard {
  constructor (game) {
    super(game, "Sangrite Surge", "Shards of Alara", "ALA");
  }
}

module.exports = SangriteSurge;
