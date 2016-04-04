"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeafdrakeRoost extends Card {
  constructor(game) {
    super(game, "Leafdrake Roost", "Commander 2013 Edition", "C13");
  }
}

module.exports = LeafdrakeRoost;
