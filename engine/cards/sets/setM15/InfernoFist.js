"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InfernoFist extends Card {
  constructor(game) {
    super(game, "Inferno Fist", "Magic 2015 Core Set", "M15");
  }
}

module.exports = InfernoFist;
