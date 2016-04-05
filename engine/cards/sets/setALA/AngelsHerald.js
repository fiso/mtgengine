"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelsHerald extends UnimplementedCard {
  constructor(game) {
    super(game, "Angel's Herald", "Shards of Alara", "ALA");
  }
}

module.exports = AngelsHerald;
