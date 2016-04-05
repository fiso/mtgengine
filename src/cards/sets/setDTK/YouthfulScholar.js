"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YouthfulScholar extends UnimplementedCard {
  constructor(game) {
    super(game, "Youthful Scholar", "Dragons of Tarkir", "DTK");
  }
}

module.exports = YouthfulScholar;
