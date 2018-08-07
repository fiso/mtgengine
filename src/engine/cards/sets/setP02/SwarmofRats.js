"use strict";
const Constants = require ("../../../Constants");
const SwarmofRatsBase = require("../setPHUK/SwarmofRats");

class SwarmofRats extends SwarmofRatsBase {
  constructor (game) {
    super(game, "Swarm of Rats", "Portal Second Age", "P02");
  }
}

module.exports = SwarmofRats;
