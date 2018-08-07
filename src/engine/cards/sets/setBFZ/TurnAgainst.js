"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TurnAgainst extends UnimplementedCard {
  constructor (game) {
    super(game, "Turn Against", "Battle for Zendikar", "BFZ");
  }
}

module.exports = TurnAgainst;
