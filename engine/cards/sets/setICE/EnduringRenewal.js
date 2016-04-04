"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnduringRenewal extends Card {
  constructor(game) {
    super(game, "Enduring Renewal", "Ice Age", "ICE");
  }
}

module.exports = EnduringRenewal;
