"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MentalNote extends Card {
  constructor(game) {
    super(game, "Mental Note", "Judgment", "JUD");
  }
}

module.exports = MentalNote;
