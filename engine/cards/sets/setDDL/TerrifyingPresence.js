"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TerrifyingPresenceBase = require("../setAVR/TerrifyingPresence.js");

class TerrifyingPresence extends TerrifyingPresenceBase {
  constructor(game) {
    super(game, "Terrifying Presence", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = TerrifyingPresence;
