"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AbandonedOutpost extends Card {
  constructor(game) {
    super(game, "Abandoned Outpost", "Odyssey", "ODY");
  }
}

module.exports = AbandonedOutpost;
