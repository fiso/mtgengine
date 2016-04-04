"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Manamorphose extends Card {
  constructor(game) {
    super(game, "Manamorphose", "Modern Masters", "MMA");
  }
}

module.exports = Manamorphose;
