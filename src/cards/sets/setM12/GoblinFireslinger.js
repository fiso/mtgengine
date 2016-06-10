"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinFireslinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Fireslinger", "Magic 2012", "M12");
  }
}

module.exports = GoblinFireslinger;
