"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoggSentry extends Card {
  constructor(game) {
    super(game, "Mogg Sentry", "Eighth Edition", "8ED");
  }
}

module.exports = MoggSentry;
