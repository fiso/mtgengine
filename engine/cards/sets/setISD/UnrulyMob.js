"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnrulyMob extends UnimplementedCard {
  constructor(game) {
    super(game, "Unruly Mob", "Innistrad", "ISD");
  }
}

module.exports = UnrulyMob;
