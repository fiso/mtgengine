"use strict";
const Constants = require ("../../../Constants");
const SimicSkySwallowerBase = require("../setDIS/SimicSkySwallower");

class SimicSkySwallower extends SimicSkySwallowerBase {
  constructor (game) {
    super(game, "Simic Sky Swallower", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = SimicSkySwallower;
