"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ExecutionersCapsuleBase = require("../setMMA/ExecutionersCapsule.js");

class ExecutionersCapsule extends ExecutionersCapsuleBase {
  constructor(game) {
    super(game, "Executioner's Capsule", "Shards of Alara", "ALA");
  }
}

module.exports = ExecutionersCapsule;
