"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DoubleDeal extends Card {
  constructor(game) {
    super(game, "Double Deal", "Unglued", "UGL");
  }
}

module.exports = DoubleDeal;
