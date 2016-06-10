"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinCaves extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Caves", "Masters Edition IV", "ME4");
  }
}

module.exports = GoblinCaves;
