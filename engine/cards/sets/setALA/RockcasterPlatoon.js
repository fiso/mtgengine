"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RockcasterPlatoon extends Card {
  constructor(game) {
    super(game, "Rockcaster Platoon", "Shards of Alara", "ALA");
  }
}

module.exports = RockcasterPlatoon;
