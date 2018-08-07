"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Octopus extends UnimplementedCard {
  constructor (game) {
    super(game, "Octopus", "Battle for Zendikar Tokens", "TBFZ");
  }
}

module.exports = Octopus;
