"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Iceberg extends Card {
  constructor(game) {
    super(game, "Iceberg", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = Iceberg;
