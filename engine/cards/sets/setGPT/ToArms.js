"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ToArms extends Card {
  constructor(game) {
    super(game, "To Arms!", "Guildpact", "GPT");
  }
}

module.exports = ToArms;
