"use strict";
const Constants = require ("../../../Constants");
const TerrifyingPresenceBase = require("../setDDL/TerrifyingPresence");

class TerrifyingPresence extends TerrifyingPresenceBase {
  constructor (game) {
    super(game, "Terrifying Presence", "Avacyn Restored", "AVR");
  }
}

module.exports = TerrifyingPresence;
