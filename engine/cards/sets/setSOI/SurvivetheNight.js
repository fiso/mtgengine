"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SurvivetheNight extends Card {
  constructor(game) {
    super(game, "Survive the Night", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SurvivetheNight;
