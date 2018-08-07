"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinCadets extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Cadets", "Commander 2011", "CMD");
  }
}

module.exports = GoblinCadets;
