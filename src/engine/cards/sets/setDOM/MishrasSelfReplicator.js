"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MishrasSelfReplicator extends UnimplementedCard {
  constructor (game) {
    super(game, "Mishra's Self-Replicator", "Dominaria", "DOM");
  }
}

module.exports = MishrasSelfReplicator;
