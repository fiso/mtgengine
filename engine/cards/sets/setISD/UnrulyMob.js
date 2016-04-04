"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnrulyMob extends Card {
  constructor(game) {
    super(game, "Unruly Mob", "Innistrad", "ISD");
  }
}

module.exports = UnrulyMob;
