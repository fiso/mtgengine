"use strict";
const Constants = require ("../../../Constants");
const MishrasSelfReplicatorBase = require("../setDOM/MishrasSelfReplicator");

class MishrasSelfReplicator extends MishrasSelfReplicatorBase {
  constructor (game) {
    super(game, "Mishra's Self-Replicator", "Dominaria Promos", "PDOM");
  }
}

module.exports = MishrasSelfReplicator;
