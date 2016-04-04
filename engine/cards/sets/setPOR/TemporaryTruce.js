"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TemporaryTruce extends Card {
  constructor(game) {
    super(game, "Temporary Truce", "Portal", "POR");
  }
}

module.exports = TemporaryTruce;
