"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Fatestitcher extends Card {
  constructor(game) {
    super(game, "Fatestitcher", "Shards of Alara", "ALA");
  }
}

module.exports = Fatestitcher;
