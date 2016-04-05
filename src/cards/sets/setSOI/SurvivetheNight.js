"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurvivetheNight extends UnimplementedCard {
  constructor(game) {
    super(game, "Survive the Night", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SurvivetheNight;
