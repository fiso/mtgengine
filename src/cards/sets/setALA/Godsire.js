"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Godsire extends UnimplementedCard {
  constructor (game) {
    super(game, "Godsire", "Shards of Alara", "ALA");
  }
}

module.exports = Godsire;
