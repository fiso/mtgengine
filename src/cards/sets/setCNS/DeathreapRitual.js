"use strict";
const Constants = require ("../../../Constants");
const DeathreapRitualBase = require("../setC18/DeathreapRitual");

class DeathreapRitual extends DeathreapRitualBase {
  constructor (game) {
    super(game, "Deathreap Ritual", "Conspiracy", "CNS");
  }
}

module.exports = DeathreapRitual;
