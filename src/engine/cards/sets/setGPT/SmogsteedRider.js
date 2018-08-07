"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SmogsteedRider extends UnimplementedCard {
  constructor (game) {
    super(game, "Smogsteed Rider", "Guildpact", "GPT");
  }
}

module.exports = SmogsteedRider;
