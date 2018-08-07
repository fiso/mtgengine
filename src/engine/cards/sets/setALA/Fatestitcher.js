"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fatestitcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Fatestitcher", "Shards of Alara", "ALA");
  }
}

module.exports = Fatestitcher;
