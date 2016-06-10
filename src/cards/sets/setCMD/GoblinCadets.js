"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinCadets extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Cadets", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = GoblinCadets;
