"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WakingNightmare extends Card {
  constructor(game) {
    super(game, "Waking Nightmare", "Champions of Kamigawa", "CHK");
  }
}

module.exports = WakingNightmare;
