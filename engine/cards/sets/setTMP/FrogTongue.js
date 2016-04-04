"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FrogTongue extends Card {
  constructor(game) {
    super(game, "Frog Tongue", "Tempest", "TMP");
  }
}

module.exports = FrogTongue;
