"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvatarofDiscord extends Card {
  constructor(game) {
    super(game, "Avatar of Discord", "Archenemy", "ARC");
  }
}

module.exports = AvatarofDiscord;
