"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SimicSkySwallowerBase = require("../setDIS/SimicSkySwallower.js");

class SimicSkySwallower extends SimicSkySwallowerBase {
  constructor(game) {
    super(game, "Simic Sky Swallower", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SimicSkySwallower;
