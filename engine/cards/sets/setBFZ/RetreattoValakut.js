"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RetreattoValakut extends Card {
  constructor(game) {
    super(game, "Retreat to Valakut", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RetreattoValakut;
