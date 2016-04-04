"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinBowlingTeam extends Card {
  constructor(game) {
    super(game, "Goblin Bowling Team", "Unglued", "UGL");
  }
}

module.exports = GoblinBowlingTeam;
