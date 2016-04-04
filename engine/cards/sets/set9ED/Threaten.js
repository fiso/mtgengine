"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Threaten extends Card {
  constructor(game) {
    super(game, "Threaten", "Ninth Edition", "9ED");
  }
}

module.exports = Threaten;
