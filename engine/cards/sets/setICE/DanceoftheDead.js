"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DanceoftheDead extends Card {
  constructor(game) {
    super(game, "Dance of the Dead", "Ice Age", "ICE");
  }
}

module.exports = DanceoftheDead;
