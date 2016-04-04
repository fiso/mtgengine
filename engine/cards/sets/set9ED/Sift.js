"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sift extends Card {
  constructor(game) {
    super(game, "Sift", "Ninth Edition", "9ED");
  }
}

module.exports = Sift;
