"use strict";
const Constants = require ("../../../Constants");
const ClockworkSwarmBase = require("../setHML/ClockworkSwarm");

class ClockworkSwarm extends ClockworkSwarmBase {
  constructor (game) {
    super(game, "Clockwork Swarm", "Masters Edition IV", "ME4");
  }
}

module.exports = ClockworkSwarm;
