"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantOctopus extends UnimplementedCard {
  constructor (game) {
    super(game, "Giant Octopus", "Ninth Edition", "9ED");
  }
}

module.exports = GiantOctopus;
