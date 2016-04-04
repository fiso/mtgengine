"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LlanowarDead extends Card {
  constructor(game) {
    super(game, "Llanowar Dead", "Apocalypse", "APC");
  }
}

module.exports = LlanowarDead;
