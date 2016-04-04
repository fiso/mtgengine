"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Impulse extends Card {
  constructor(game) {
    super(game, "Impulse", "Beatdown Box Set", "BTD");
  }
}

module.exports = Impulse;
