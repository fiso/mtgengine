"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnrulyMob extends UnimplementedCard {
  constructor (game) {
    super(game, "Unruly Mob", "Shadows over Innistrad", "SOI");
  }
}

module.exports = UnrulyMob;
