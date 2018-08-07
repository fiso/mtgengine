"use strict";
const Constants = require ("../../../Constants");
const PresenceofGondBase = require("../setA25/PresenceofGond");

class PresenceofGond extends PresenceofGondBase {
  constructor (game) {
    super(game, "Presence of Gond", "Commander Anthology", "CMA");
  }
}

module.exports = PresenceofGond;
