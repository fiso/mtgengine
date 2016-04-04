"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TurfWound extends Card {
  constructor(game) {
    super(game, "Turf Wound", "Invasion", "INV");
  }
}

module.exports = TurfWound;
