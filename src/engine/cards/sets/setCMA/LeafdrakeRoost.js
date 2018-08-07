"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeafdrakeRoost extends UnimplementedCard {
  constructor (game) {
    super(game, "Leafdrake Roost", "Commander Anthology", "CMA");
  }
}

module.exports = LeafdrakeRoost;
