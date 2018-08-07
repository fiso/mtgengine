"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReduceRubble extends UnimplementedCard {
  constructor (game) {
    super(game, "Reduce // Rubble", "Amonkhet", "AKH");
  }
}

module.exports = ReduceRubble;
