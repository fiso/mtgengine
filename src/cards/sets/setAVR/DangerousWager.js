"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DangerousWager extends UnimplementedCard {
  constructor (game) {
    super(game, "Dangerous Wager", "Avacyn Restored", "AVR");
  }
}

module.exports = DangerousWager;
