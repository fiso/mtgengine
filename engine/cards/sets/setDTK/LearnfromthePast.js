"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LearnfromthePast extends Card {
  constructor(game) {
    super(game, "Learn from the Past", "Dragons of Tarkir", "DTK");
  }
}

module.exports = LearnfromthePast;
