"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Biorhythm extends Card {
  constructor(game) {
    super(game, "Biorhythm", "Ninth Edition", "9ED");
  }
}

module.exports = Biorhythm;
