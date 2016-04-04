"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThalakosSentry extends Card {
  constructor(game) {
    super(game, "Thalakos Sentry", "Tempest", "TMP");
  }
}

module.exports = ThalakosSentry;
