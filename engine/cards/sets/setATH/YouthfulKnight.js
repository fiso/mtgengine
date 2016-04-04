"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YouthfulKnight extends Card {
  constructor(game) {
    super(game, "Youthful Knight", "Anthologies", "ATH");
  }
}

module.exports = YouthfulKnight;
