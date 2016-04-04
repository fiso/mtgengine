"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DispellersCapsuleBase = require("../setMMA/DispellersCapsule.js");

class DispellersCapsule extends DispellersCapsuleBase {
  constructor(game) {
    super(game, "Dispeller's Capsule", "Shards of Alara", "ALA");
  }
}

module.exports = DispellersCapsule;
