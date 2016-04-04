"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Exhaustion extends UnimplementedCard {
  constructor(game) {
    super(game, "Exhaustion", "Ninth Edition", "9ED");
  }
}

module.exports = Exhaustion;
