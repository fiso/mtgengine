"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Plagiarize extends Card {
  constructor(game) {
    super(game, "Plagiarize", "Ninth Edition", "9ED");
  }
}

module.exports = Plagiarize;
