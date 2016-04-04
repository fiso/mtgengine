"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Chill extends Card {
  constructor(game) {
    super(game, "Chill", "Arena League", "pARL");
  }
}

module.exports = Chill;
