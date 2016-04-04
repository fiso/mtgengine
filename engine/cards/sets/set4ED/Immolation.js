"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Immolation extends Card {
  constructor(game) {
    super(game, "Immolation", "Fourth Edition", "4ED");
  }
}

module.exports = Immolation;
