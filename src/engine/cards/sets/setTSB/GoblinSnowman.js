"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinSnowman extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Snowman", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = GoblinSnowman;
