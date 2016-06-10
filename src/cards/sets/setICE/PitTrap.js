"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PitTrap extends UnimplementedCard {
  constructor (game) {
    super(game, "Pit Trap", "Ice Age", "ICE");
  }
}

module.exports = PitTrap;
