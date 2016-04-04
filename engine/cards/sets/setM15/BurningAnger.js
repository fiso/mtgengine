"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BurningAnger extends Card {
  constructor(game) {
    super(game, "Burning Anger", "Magic 2015 Core Set", "M15");
  }
}

module.exports = BurningAnger;
