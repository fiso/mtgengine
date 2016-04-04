"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Snakeform extends Card {
  constructor(game) {
    super(game, "Snakeform", "Commander 2015", "C15");
  }
}

module.exports = Snakeform;
