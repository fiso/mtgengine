"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrinceofThralls extends UnimplementedCard {
  constructor (game) {
    super(game, "Prince of Thralls", "Shards of Alara", "ALA");
  }
}

module.exports = PrinceofThralls;
