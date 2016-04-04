"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MaritimeGuard extends Card {
  constructor(game) {
    super(game, "Maritime Guard", "Magic 2011", "M11");
  }
}

module.exports = MaritimeGuard;
