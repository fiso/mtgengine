"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeedleStorm extends UnimplementedCard {
  constructor(game) {
    super(game, "Needle Storm", "Ninth Edition", "9ED");
  }
}

module.exports = NeedleStorm;
