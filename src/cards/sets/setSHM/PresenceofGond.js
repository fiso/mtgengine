"use strict";
const Constants = require ("../../../Constants");
const PresenceofGondBase = require("../setC13/PresenceofGond");

class PresenceofGond extends PresenceofGondBase {
  constructor(game) {
    super(game, "Presence of Gond", "Shadowmoor", "SHM");
  }
}

module.exports = PresenceofGond;
