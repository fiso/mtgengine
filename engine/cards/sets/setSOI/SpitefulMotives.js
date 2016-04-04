"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpitefulMotives extends Card {
  constructor(game) {
    super(game, "Spiteful Motives", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SpitefulMotives;
