"use strict";
const Constants = require ("../../../Constants");
const GoblinDeathraidersBase = require("../setDDN/GoblinDeathraiders");

class GoblinDeathraiders extends GoblinDeathraidersBase {
  constructor(game) {
    super(game, "Goblin Deathraiders", "Shards of Alara", "ALA");
  }
}

module.exports = GoblinDeathraiders;
