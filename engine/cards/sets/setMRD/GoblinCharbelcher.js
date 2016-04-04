"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinCharbelcher extends Card {
  constructor(game) {
    super(game, "Goblin Charbelcher", "Mirrodin", "MRD");
  }
}

module.exports = GoblinCharbelcher;
