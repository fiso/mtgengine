"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YouthfulKnight extends UnimplementedCard {
  constructor(game) {
    super(game, "Youthful Knight", "Anthologies", "ATH");
  }
}

module.exports = YouthfulKnight;
