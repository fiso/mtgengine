"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Shackles extends Card {
  constructor(game) {
    super(game, "Shackles", "Exodus", "EXO");
  }
}

module.exports = Shackles;
