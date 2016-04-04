"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FertileImagination extends Card {
  constructor(game) {
    super(game, "Fertile Imagination", "Dissension", "DIS");
  }
}

module.exports = FertileImagination;
