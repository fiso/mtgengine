"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeektheWilds extends Card {
  constructor(game) {
    super(game, "Seek the Wilds", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SeektheWilds;
