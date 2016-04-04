"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Marjhan extends Card {
  constructor(game) {
    super(game, "Marjhan", "Homelands", "HML");
  }
}

module.exports = Marjhan;
