"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnduringIdeal extends Card {
  constructor(game) {
    super(game, "Enduring Ideal", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = EnduringIdeal;
