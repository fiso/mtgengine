"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Manaplasm extends UnimplementedCard {
  constructor (game) {
    super(game, "Manaplasm", "Shards of Alara", "ALA");
  }
}

module.exports = Manaplasm;
