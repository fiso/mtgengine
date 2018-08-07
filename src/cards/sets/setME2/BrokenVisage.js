"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrokenVisage extends UnimplementedCard {
  constructor (game) {
    super(game, "Broken Visage", "Masters Edition II", "ME2");
  }
}

module.exports = BrokenVisage;
