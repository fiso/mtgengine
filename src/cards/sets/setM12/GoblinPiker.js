"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinPiker extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Piker", "Magic 2012", "M12");
  }
}

module.exports = GoblinPiker;
