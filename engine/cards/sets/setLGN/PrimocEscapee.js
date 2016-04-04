"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrimocEscapee extends Card {
  constructor(game) {
    super(game, "Primoc Escapee", "Legions", "LGN");
  }
}

module.exports = PrimocEscapee;
