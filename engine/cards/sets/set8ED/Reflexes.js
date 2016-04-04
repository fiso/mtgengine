"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Reflexes extends Card {
  constructor(game) {
    super(game, "Reflexes", "Eighth Edition", "8ED");
  }
}

module.exports = Reflexes;
