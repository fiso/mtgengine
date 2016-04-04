"use strict";
const Constants = require ("../../../Constants");
const DispellersCapsuleBase = require("../setMMA/DispellersCapsule");

class DispellersCapsule extends DispellersCapsuleBase {
  constructor(game) {
    super(game, "Dispeller's Capsule", "Shards of Alara", "ALA");
  }
}

module.exports = DispellersCapsule;
