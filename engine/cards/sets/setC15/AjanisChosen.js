"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AjanisChosen extends Card {
  constructor(game) {
    super(game, "Ajani's Chosen", "Commander 2015", "C15");
  }
}

module.exports = AjanisChosen;
