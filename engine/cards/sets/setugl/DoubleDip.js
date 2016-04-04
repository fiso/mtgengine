"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DoubleDip extends Card {
  constructor(game) {
    super(game, "Double Dip", "Unglued", "UGL");
  }
}

module.exports = DoubleDip;
