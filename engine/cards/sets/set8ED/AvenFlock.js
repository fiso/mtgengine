"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvenFlock extends Card {
  constructor(game) {
    super(game, "Aven Flock", "Eighth Edition", "8ED");
  }
}

module.exports = AvenFlock;
