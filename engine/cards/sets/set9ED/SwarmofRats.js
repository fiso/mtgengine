"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SwarmofRatsBase = require("../set8ED/SwarmofRats.js");

class SwarmofRats extends SwarmofRatsBase {
  constructor(game) {
    super(game, "Swarm of Rats", "Ninth Edition", "9ED");
  }
}

module.exports = SwarmofRats;
