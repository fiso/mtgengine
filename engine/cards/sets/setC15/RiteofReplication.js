"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RiteofReplicationBase = require("../setC14/RiteofReplication.js");

class RiteofReplication extends RiteofReplicationBase {
  constructor(game) {
    super(game, "Rite of Replication", "Commander 2015", "C15");
  }
}

module.exports = RiteofReplication;
