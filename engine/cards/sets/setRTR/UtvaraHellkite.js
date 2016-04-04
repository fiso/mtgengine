"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UtvaraHellkite extends Card {
  constructor(game) {
    super(game, "Utvara Hellkite", "Return to Ravnica", "RTR");
  }
}

module.exports = UtvaraHellkite;
