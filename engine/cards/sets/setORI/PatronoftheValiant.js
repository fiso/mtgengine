"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PatronoftheValiant extends Card {
  constructor(game) {
    super(game, "Patron of the Valiant", "Magic Origins", "ORI");
  }
}

module.exports = PatronoftheValiant;
