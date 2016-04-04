"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlumReaper extends Card {
  constructor(game) {
    super(game, "Slum Reaper", "Return to Ravnica", "RTR");
  }
}

module.exports = SlumReaper;
