"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InspiringCaptain extends Card {
  constructor(game) {
    super(game, "Inspiring Captain", "Shadows over Innistrad", "SOI");
  }
}

module.exports = InspiringCaptain;
