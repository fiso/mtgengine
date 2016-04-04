"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WhirlingCatapult extends Card {
  constructor(game) {
    super(game, "Whirling Catapult", "Alliances", "ALL");
  }
}

module.exports = WhirlingCatapult;
