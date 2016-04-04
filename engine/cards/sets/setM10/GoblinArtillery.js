"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinArtillery extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Artillery", "Magic 2010", "M10");
  }
}

module.exports = GoblinArtillery;
