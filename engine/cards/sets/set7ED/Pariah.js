"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Pariah extends Card {
  constructor(game) {
    super(game, "Pariah", "Seventh Edition", "7ED");
  }
}

module.exports = Pariah;
