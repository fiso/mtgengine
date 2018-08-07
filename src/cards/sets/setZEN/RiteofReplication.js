"use strict";
const Constants = require ("../../../Constants");
const RiteofReplicationBase = require("../setC15/RiteofReplication");

class RiteofReplication extends RiteofReplicationBase {
  constructor (game) {
    super(game, "Rite of Replication", "Zendikar", "ZEN");
  }
}

module.exports = RiteofReplication;
