"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YouthfulScholar extends Card {
  constructor(game) {
    super(game, "Youthful Scholar", "Dragons of Tarkir", "DTK");
  }
}

module.exports = YouthfulScholar;
