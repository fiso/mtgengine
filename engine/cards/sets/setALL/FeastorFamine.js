"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FeastorFamine extends Card {
  constructor(game) {
    super(game, "Feast or Famine", "Alliances", "ALL");
  }
}

module.exports = FeastorFamine;
