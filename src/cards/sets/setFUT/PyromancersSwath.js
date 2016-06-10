"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PyromancersSwath extends UnimplementedCard {
  constructor (game) {
    super(game, "Pyromancer's Swath", "Future Sight", "FUT");
  }
}

module.exports = PyromancersSwath;
