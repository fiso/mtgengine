"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MinionReflector extends UnimplementedCard {
  constructor (game) {
    super(game, "Minion Reflector", "Shards of Alara", "ALA");
  }
}

module.exports = MinionReflector;
