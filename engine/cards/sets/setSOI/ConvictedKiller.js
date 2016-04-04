"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConvictedKiller extends Card {
  constructor(game) {
    super(game, "Convicted Killer", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ConvictedKiller;
