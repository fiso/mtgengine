"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Misinformation extends Card {
  constructor(game) {
    super(game, "Misinformation", "Alliances", "ALL");
  }
}

module.exports = Misinformation;
