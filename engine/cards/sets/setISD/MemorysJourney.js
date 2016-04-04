"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MemorysJourney extends Card {
  constructor(game) {
    super(game, "Memory's Journey", "Innistrad", "ISD");
  }
}

module.exports = MemorysJourney;
