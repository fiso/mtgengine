"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SmogsteedRider extends Card {
  constructor(game) {
    super(game, "Smogsteed Rider", "Guildpact", "GPT");
  }
}

module.exports = SmogsteedRider;
