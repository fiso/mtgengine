"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HarrowingJourney extends Card {
  constructor(game) {
    super(game, "Harrowing Journey", "Dark Ascension", "DKA");
  }
}

module.exports = HarrowingJourney;
