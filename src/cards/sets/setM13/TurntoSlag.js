"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TurntoSlag extends UnimplementedCard {
  constructor (game) {
    super(game, "Turn to Slag", "Magic 2013", "M13");
  }
}

module.exports = TurntoSlag;
