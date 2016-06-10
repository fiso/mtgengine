"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrokenVisage extends UnimplementedCard {
  constructor (game) {
    super(game, "Broken Visage", "Fifth Edition", "5ED");
  }
}

module.exports = BrokenVisage;
