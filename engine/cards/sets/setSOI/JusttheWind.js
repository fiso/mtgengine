"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JusttheWind extends Card {
  constructor(game) {
    super(game, "Just the Wind", "Shadows over Innistrad", "SOI");
  }
}

module.exports = JusttheWind;
