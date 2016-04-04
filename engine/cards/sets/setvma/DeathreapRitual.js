"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathreapRitualBase = require("../setCNS/DeathreapRitual.js");

class DeathreapRitual extends DeathreapRitualBase {
  constructor(game) {
    super(game, "Deathreap Ritual", "Vintage Masters", "VMA");
  }
}

module.exports = DeathreapRitual;
