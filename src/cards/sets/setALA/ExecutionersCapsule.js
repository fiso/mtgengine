"use strict";
const Constants = require ("../../../Constants");
const ExecutionersCapsuleBase = require("../setC16/ExecutionersCapsule");

class ExecutionersCapsule extends ExecutionersCapsuleBase {
  constructor (game) {
    super(game, "Executioner's Capsule", "Shards of Alara", "ALA");
  }
}

module.exports = ExecutionersCapsule;
