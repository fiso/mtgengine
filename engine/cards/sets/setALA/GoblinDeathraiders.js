"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinDeathraidersBase = require("../setDDN/GoblinDeathraiders.js");

class GoblinDeathraiders extends GoblinDeathraidersBase {
  constructor(game) {
    super(game, "Goblin Deathraiders", "Shards of Alara", "ALA");
  }
}

module.exports = GoblinDeathraiders;
