"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Deadhead extends Card {
  constructor(game) {
    super(game, "Deadhead", "Unglued", "UGL");
  }
}

module.exports = Deadhead;
