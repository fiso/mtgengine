"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkullCatapult extends Card {
  constructor(game) {
    super(game, "Skull Catapult", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SkullCatapult;
