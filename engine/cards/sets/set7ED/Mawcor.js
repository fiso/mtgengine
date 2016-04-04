"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mawcor extends Card {
  constructor(game) {
    super(game, "Mawcor", "Seventh Edition", "7ED");
  }
}

module.exports = Mawcor;
