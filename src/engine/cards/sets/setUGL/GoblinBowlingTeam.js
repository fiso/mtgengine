"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinBowlingTeam extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Bowling Team", "Unglued", "UGL");
  }
}

module.exports = GoblinBowlingTeam;
