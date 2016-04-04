"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Magnivore extends Card {
  constructor(game) {
    super(game, "Magnivore", "Ninth Edition", "9ED");
  }
}

module.exports = Magnivore;
