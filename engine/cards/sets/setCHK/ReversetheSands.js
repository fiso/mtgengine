"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReversetheSands extends Card {
  constructor(game) {
    super(game, "Reverse the Sands", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ReversetheSands;
