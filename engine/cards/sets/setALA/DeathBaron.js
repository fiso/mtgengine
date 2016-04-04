"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathBaronBase = require("../setHOP/DeathBaron.js");

class DeathBaron extends DeathBaronBase {
  constructor(game) {
    super(game, "Death Baron", "Shards of Alara", "ALA");
  }
}

module.exports = DeathBaron;
