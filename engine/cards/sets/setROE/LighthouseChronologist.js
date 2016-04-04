"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LighthouseChronologist extends Card {
  constructor(game) {
    super(game, "Lighthouse Chronologist", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = LighthouseChronologist;
