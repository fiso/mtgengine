"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SigilofDistinction extends UnimplementedCard {
  constructor (game) {
    super(game, "Sigil of Distinction", "Shards of Alara", "ALA");
  }
}

module.exports = SigilofDistinction;
