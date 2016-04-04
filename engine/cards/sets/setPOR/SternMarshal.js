"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SternMarshal extends Card {
  constructor(game) {
    super(game, "Stern Marshal", "Portal", "POR");
  }
}

module.exports = SternMarshal;
