"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConchHorn extends Card {
  constructor(game) {
    super(game, "Conch Horn", "Fallen Empires", "FEM");
  }
}

module.exports = ConchHorn;
