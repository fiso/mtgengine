"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildernessHypnotist extends Card {
  constructor(game) {
    super(game, "Wilderness Hypnotist", "Eventide", "EVE");
  }
}

module.exports = WildernessHypnotist;
