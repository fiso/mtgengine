"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VigilantSentry extends Card {
  constructor(game) {
    super(game, "Vigilant Sentry", "Judgment", "JUD");
  }
}

module.exports = VigilantSentry;
