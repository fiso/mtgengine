"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpectersWail extends Card {
  constructor(game) {
    super(game, "Specter's Wail", "Mercadian Masques", "MMQ");
  }
}

module.exports = SpectersWail;
