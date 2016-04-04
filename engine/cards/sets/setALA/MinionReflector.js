"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MinionReflector extends Card {
  constructor(game) {
    super(game, "Minion Reflector", "Shards of Alara", "ALA");
  }
}

module.exports = MinionReflector;
