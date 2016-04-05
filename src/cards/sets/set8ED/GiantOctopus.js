"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantOctopus extends UnimplementedCard {
  constructor(game) {
    super(game, "Giant Octopus", "Eighth Edition", "8ED");
  }
}

module.exports = GiantOctopus;
