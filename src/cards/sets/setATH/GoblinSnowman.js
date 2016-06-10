"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinSnowman extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Snowman", "Anthologies", "ATH");
  }
}

module.exports = GoblinSnowman;
