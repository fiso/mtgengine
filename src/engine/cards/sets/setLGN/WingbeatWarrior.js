"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WingbeatWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Wingbeat Warrior", "Legions", "LGN");
  }
}

module.exports = WingbeatWarrior;
