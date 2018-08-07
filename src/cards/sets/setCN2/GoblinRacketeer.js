"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinRacketeer extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Racketeer", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = GoblinRacketeer;
