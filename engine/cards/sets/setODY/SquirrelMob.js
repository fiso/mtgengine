"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SquirrelMob extends UnimplementedCard {
  constructor(game) {
    super(game, "Squirrel Mob", "Odyssey", "ODY");
  }
}

module.exports = SquirrelMob;
