"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CraftyOctopus extends UnimplementedCard {
  constructor (game) {
    super(game, "Crafty Octopus", "Unstable", "UST");
  }
}

module.exports = CraftyOctopus;
