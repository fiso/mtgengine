"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinReplica extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Replica", "Mirrodin", "MRD");
  }
}

module.exports = GoblinReplica;
