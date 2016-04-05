"use strict";
const Constants = require ("../../../Constants");
const ExecutionersCapsuleBase = require("../setMMA/ExecutionersCapsule");

class ExecutionersCapsule extends ExecutionersCapsuleBase {
  constructor(game) {
    super(game, "Executioner's Capsule", "Shards of Alara", "ALA");
  }
}

module.exports = ExecutionersCapsule;
