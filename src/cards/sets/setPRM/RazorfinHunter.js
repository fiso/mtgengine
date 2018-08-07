"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RazorfinHunter extends UnimplementedCard {
  constructor (game) {
    super(game, "Razorfin Hunter", "Magic Online Promos", "PRM");
  }
}

module.exports = RazorfinHunter;
