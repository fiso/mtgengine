"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThrabenSentry extends Card {
  constructor(game) {
    super(game, "Thraben Sentry", "Innistrad", "ISD");
  }
}

module.exports = ThrabenSentry;
