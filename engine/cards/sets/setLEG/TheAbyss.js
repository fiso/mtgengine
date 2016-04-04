"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TheAbyss extends Card {
  constructor(game) {
    super(game, "The Abyss", "Legends", "LEG");
  }
}

module.exports = TheAbyss;
