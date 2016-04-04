"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Lichenthrope extends Card {
  constructor(game) {
    super(game, "Lichenthrope", "Visions", "VIS");
  }
}

module.exports = Lichenthrope;
