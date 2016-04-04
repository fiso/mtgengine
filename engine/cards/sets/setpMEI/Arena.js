"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Arena extends Card {
  constructor(game) {
    super(game, "Arena", "Media Inserts", "pMEI");
  }
}

module.exports = Arena;
