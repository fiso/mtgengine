"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Lexivore extends Card {
  constructor(game) {
    super(game, "Lexivore", "Unglued", "UGL");
  }
}

module.exports = Lexivore;
