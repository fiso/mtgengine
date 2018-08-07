"use strict";
const Constants = require ("../../../Constants");
const SimicSkySwallowerBase = require("../setIMA/SimicSkySwallower");

class SimicSkySwallower extends SimicSkySwallowerBase {
  constructor (game) {
    super(game, "Simic Sky Swallower", "Commander 2011", "CMD");
  }
}

module.exports = SimicSkySwallower;
