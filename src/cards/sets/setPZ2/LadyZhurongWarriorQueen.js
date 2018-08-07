"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LadyZhurongWarriorQueen extends UnimplementedCard {
  constructor (game) {
    super(game, "Lady Zhurong, Warrior Queen", "You Make the Cube", "PZ2");
  }
}

module.exports = LadyZhurongWarriorQueen;
