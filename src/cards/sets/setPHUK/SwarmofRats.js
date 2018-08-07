"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwarmofRats extends UnimplementedCard {
  constructor (game) {
    super(game, "Swarm of Rats", "Hachette UK", "PHUK");
  }
}

module.exports = SwarmofRats;
