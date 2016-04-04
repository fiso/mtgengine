"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HumbletheBrute extends Card {
  constructor(game) {
    super(game, "Humble the Brute", "Shadows over Innistrad", "SOI");
  }
}

module.exports = HumbletheBrute;
