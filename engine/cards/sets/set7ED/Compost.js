"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Compost extends Card {
  constructor(game) {
    super(game, "Compost", "Seventh Edition", "7ED");
  }
}

module.exports = Compost;
