"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpiteofMogis extends Card {
  constructor(game) {
    super(game, "Spite of Mogis", "Journey into Nyx", "JOU");
  }
}

module.exports = SpiteofMogis;
