"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinWarBuggy extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin War Buggy", "Urza's Saga", "USG");
  }
}

module.exports = GoblinWarBuggy;
