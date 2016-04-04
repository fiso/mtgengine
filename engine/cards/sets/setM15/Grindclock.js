"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Grindclock extends Card {
  constructor(game) {
    super(game, "Grindclock", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Grindclock;
