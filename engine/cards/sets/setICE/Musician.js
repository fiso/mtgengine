"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Musician extends Card {
  constructor(game) {
    super(game, "Musician", "Ice Age", "ICE");
  }
}

module.exports = Musician;
