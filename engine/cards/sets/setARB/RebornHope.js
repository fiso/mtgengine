"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RebornHope extends Card {
  constructor(game) {
    super(game, "Reborn Hope", "Alara Reborn", "ARB");
  }
}

module.exports = RebornHope;
