"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YouthfulKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Youthful Knight", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = YouthfulKnight;
