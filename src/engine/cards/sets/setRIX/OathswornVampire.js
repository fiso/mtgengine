"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OathswornVampire extends UnimplementedCard {
  constructor (game) {
    super(game, "Oathsworn Vampire", "Rivals of Ixalan", "RIX");
  }
}

module.exports = OathswornVampire;
