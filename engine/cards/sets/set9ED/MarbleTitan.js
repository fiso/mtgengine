"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarbleTitan extends Card {
  constructor(game) {
    super(game, "Marble Titan", "Ninth Edition", "9ED");
  }
}

module.exports = MarbleTitan;
