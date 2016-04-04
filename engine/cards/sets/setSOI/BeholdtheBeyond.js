"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BeholdtheBeyond extends Card {
  constructor(game) {
    super(game, "Behold the Beyond", "Shadows over Innistrad", "SOI");
  }
}

module.exports = BeholdtheBeyond;
