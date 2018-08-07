"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlashofInsight extends UnimplementedCard {
  constructor (game) {
    super(game, "Flash of Insight", "Judgment", "JUD");
  }
}

module.exports = FlashofInsight;
