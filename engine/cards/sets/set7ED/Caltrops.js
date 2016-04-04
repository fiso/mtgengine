"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Caltrops extends Card {
  constructor(game) {
    super(game, "Caltrops", "Seventh Edition", "7ED");
  }
}

module.exports = Caltrops;
