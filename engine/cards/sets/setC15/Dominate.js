"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dominate extends Card {
  constructor(game) {
    super(game, "Dominate", "Commander 2015", "C15");
  }
}

module.exports = Dominate;
