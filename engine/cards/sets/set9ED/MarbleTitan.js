"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarbleTitan extends UnimplementedCard {
  constructor(game) {
    super(game, "Marble Titan", "Ninth Edition", "9ED");
  }
}

module.exports = MarbleTitan;
