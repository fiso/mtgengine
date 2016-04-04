"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EndlessScream extends Card {
  constructor(game) {
    super(game, "Endless Scream", "Tempest", "TMP");
  }
}

module.exports = EndlessScream;
