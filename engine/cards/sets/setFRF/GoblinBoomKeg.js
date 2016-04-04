"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinBoomKeg extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Boom Keg", "Fate Reforged", "FRF");
  }
}

module.exports = GoblinBoomKeg;
