"use strict";
const Constants = require ("../../../Constants");
const DeathreapRitualBase = require("../setCNS/DeathreapRitual");

class DeathreapRitual extends DeathreapRitualBase {
  constructor(game) {
    super(game, "Deathreap Ritual", "Vintage Masters", "VMA");
  }
}

module.exports = DeathreapRitual;
