"use strict";
const Constants = require ("../../../Constants");
const SimicSkySwallowerBase = require("../setIMA/SimicSkySwallower");

class SimicSkySwallower extends SimicSkySwallowerBase {
  constructor (game) {
    super(game, "Simic Sky Swallower", "Modern Masters 2017", "MM3");
  }
}

module.exports = SimicSkySwallower;
