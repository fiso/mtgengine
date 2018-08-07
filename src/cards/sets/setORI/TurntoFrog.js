"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TurntoFrog extends UnimplementedCard {
  constructor (game) {
    super(game, "Turn to Frog", "Magic Origins", "ORI");
  }
}

module.exports = TurntoFrog;
