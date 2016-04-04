"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SibsigHost extends Card {
  constructor(game) {
    super(game, "Sibsig Host", "Fate Reforged", "FRF");
  }
}

module.exports = SibsigHost;
