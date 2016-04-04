"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Curiosity extends Card {
  constructor(game) {
    super(game, "Curiosity", "Eighth Edition", "8ED");
  }
}

module.exports = Curiosity;
