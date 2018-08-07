"use strict";
const Constants = require ("../../../Constants");
const XantidSwarmBase = require("../setEMA/XantidSwarm");

class XantidSwarm extends XantidSwarmBase {
  constructor (game) {
    super(game, "Xantid Swarm", "Scourge", "SCG");
  }
}

module.exports = XantidSwarm;
