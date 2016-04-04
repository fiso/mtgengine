"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Riptide extends Card {
  constructor(game) {
    super(game, "Riptide", "The Dark", "DRK");
  }
}

module.exports = Riptide;
