"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiverBear extends UnimplementedCard {
  constructor(game) {
    super(game, "River Bear", "Ninth Edition", "9ED");
  }
}

module.exports = RiverBear;
