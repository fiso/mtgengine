"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Insight extends Card {
  constructor(game) {
    super(game, "Insight", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Insight;
