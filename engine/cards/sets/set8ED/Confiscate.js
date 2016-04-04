"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Confiscate extends Card {
  constructor(game) {
    super(game, "Confiscate", "Eighth Edition", "8ED");
  }
}

module.exports = Confiscate;
