"use strict";
const Constants = require ("../../../Constants");
const SwarmofRatsBase = require("../setPHUK/SwarmofRats");

class SwarmofRats extends SwarmofRatsBase {
  constructor (game) {
    super(game, "Swarm of Rats", "Eighth Edition", "8ED");
  }
}

module.exports = SwarmofRats;
