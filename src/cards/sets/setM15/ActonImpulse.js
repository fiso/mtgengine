"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ActonImpulse extends UnimplementedCard {
  constructor (game) {
    super(game, "Act on Impulse", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ActonImpulse;
