"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Overblaze extends Card {
  constructor(game) {
    super(game, "Overblaze", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Overblaze;
