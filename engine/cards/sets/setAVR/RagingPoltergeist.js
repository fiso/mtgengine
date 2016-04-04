"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RagingPoltergeist extends Card {
  constructor(game) {
    super(game, "Raging Poltergeist", "Avacyn Restored", "AVR");
  }
}

module.exports = RagingPoltergeist;
