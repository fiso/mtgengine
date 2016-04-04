"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MartyrofFrostBase = require("../setCSP/MartyrofFrost.js");

class MartyrofFrost extends MartyrofFrostBase {
  constructor(game) {
    super(game, "Martyr of Frost", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = MartyrofFrost;
