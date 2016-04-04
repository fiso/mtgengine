"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PolymorphistsJest extends Card {
  constructor(game) {
    super(game, "Polymorphist's Jest", "Magic 2015 Core Set", "M15");
  }
}

module.exports = PolymorphistsJest;
