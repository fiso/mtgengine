"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianDevourer extends Card {
  constructor(game) {
    super(game, "Phyrexian Devourer", "Alliances", "ALL");
  }
}

module.exports = PhyrexianDevourer;
