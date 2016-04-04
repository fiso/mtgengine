"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PyromancersSwath extends Card {
  constructor(game) {
    super(game, "Pyromancer's Swath", "Future Sight", "FUT");
  }
}

module.exports = PyromancersSwath;
