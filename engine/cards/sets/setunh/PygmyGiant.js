"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PygmyGiant extends Card {
  constructor(game) {
    super(game, "Pygmy Giant", "Unhinged", "UNH");
  }
}

module.exports = PygmyGiant;
