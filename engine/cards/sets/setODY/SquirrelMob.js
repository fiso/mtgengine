"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SquirrelMob extends Card {
  constructor(game) {
    super(game, "Squirrel Mob", "Odyssey", "ODY");
  }
}

module.exports = SquirrelMob;
