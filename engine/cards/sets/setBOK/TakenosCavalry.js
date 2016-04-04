"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TakenosCavalry extends Card {
  constructor(game) {
    super(game, "Takeno's Cavalry", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = TakenosCavalry;
