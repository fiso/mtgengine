"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeirtotheNight extends Card {
  constructor(game) {
    super(game, "Heir to the Night", "Shadows over Innistrad", "SOI");
  }
}

module.exports = HeirtotheNight;
