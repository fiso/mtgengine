"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cleansing extends Card {
  constructor(game) {
    super(game, "Cleansing", "The Dark", "DRK");
  }
}

module.exports = Cleansing;
