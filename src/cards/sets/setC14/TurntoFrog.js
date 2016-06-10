"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TurntoFrog extends UnimplementedCard {
  constructor (game) {
    super(game, "Turn to Frog", "Commander 2014", "C14");
  }
}

module.exports = TurntoFrog;
