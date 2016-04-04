"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ClockworkSwarmBase = require("../setHML/ClockworkSwarm.js");

class ClockworkSwarm extends ClockworkSwarmBase {
  constructor(game) {
    super(game, "Clockwork Swarm", "Masters Edition IV", "ME4");
  }
}

module.exports = ClockworkSwarm;
