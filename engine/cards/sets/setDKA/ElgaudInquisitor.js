"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElgaudInquisitor extends Card {
  constructor(game) {
    super(game, "Elgaud Inquisitor", "Dark Ascension", "DKA");
  }
}

module.exports = ElgaudInquisitor;
