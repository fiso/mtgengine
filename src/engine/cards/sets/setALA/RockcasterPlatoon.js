"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RockcasterPlatoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Rockcaster Platoon", "Shards of Alara", "ALA");
  }
}

module.exports = RockcasterPlatoon;
