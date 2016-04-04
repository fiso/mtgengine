"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlashPanther extends Card {
  constructor(game) {
    super(game, "Slash Panther", "New Phyrexia", "NPH");
  }
}

module.exports = SlashPanther;
