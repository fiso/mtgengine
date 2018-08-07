"use strict";
const Constants = require ("../../../Constants");
const DaxossTormentBase = require("../setPZ1/DaxossTorment");

class DaxossTorment extends DaxossTormentBase {
  constructor (game) {
    super(game, "Daxos's Torment", "Commander 2015", "C15");
  }
}

module.exports = DaxossTorment;
