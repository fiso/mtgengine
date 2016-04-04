"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ErraticMutation extends Card {
  constructor(game) {
    super(game, "Erratic Mutation", "Modern Masters", "MMA");
  }
}

module.exports = ErraticMutation;
