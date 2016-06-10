"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WakingNightmare extends UnimplementedCard {
  constructor (game) {
    super(game, "Waking Nightmare", "Champions of Kamigawa", "CHK");
  }
}

module.exports = WakingNightmare;
