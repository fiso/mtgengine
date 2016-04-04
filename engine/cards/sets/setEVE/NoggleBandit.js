"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NoggleBandit extends Card {
  constructor(game) {
    super(game, "Noggle Bandit", "Eventide", "EVE");
  }
}

module.exports = NoggleBandit;
