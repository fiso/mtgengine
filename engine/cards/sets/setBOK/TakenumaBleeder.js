"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TakenumaBleeder extends Card {
  constructor(game) {
    super(game, "Takenuma Bleeder", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = TakenumaBleeder;
