"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinPiledriver extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Piledriver", "Magic Origins Promos", "PORI");
  }
}

module.exports = GoblinPiledriver;
