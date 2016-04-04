"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoldeviSentry extends Card {
  constructor(game) {
    super(game, "Soldevi Sentry", "Alliances", "ALL");
  }
}

module.exports = SoldeviSentry;
