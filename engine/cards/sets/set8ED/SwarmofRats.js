"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwarmofRats extends UnimplementedCard {
  constructor(game) {
    super(game, "Swarm of Rats", "Eighth Edition", "8ED");
  }
}

module.exports = SwarmofRats;
