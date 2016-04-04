"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarbleChalice extends Card {
  constructor(game) {
    super(game, "Marble Chalice", "Shards of Alara", "ALA");
  }
}

module.exports = MarbleChalice;
