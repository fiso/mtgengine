"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TorWauki extends Card {
  constructor(game) {
    super(game, "Tor Wauki", "Chronicles", "CHR");
  }
}

module.exports = TorWauki;
