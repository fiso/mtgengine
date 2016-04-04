"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DivineReckoning extends Card {
  constructor(game) {
    super(game, "Divine Reckoning", "Innistrad", "ISD");
  }
}

module.exports = DivineReckoning;
