"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HighlandGame extends Card {
  constructor(game) {
    super(game, "Highland Game", "Khans of Tarkir", "KTK");
  }
}

module.exports = HighlandGame;
