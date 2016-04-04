"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Disorder extends Card {
  constructor(game) {
    super(game, "Disorder", "Seventh Edition", "7ED");
  }
}

module.exports = Disorder;
