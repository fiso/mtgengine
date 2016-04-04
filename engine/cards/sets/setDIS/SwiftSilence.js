"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SwiftSilence extends Card {
  constructor(game) {
    super(game, "Swift Silence", "Dissension", "DIS");
  }
}

module.exports = SwiftSilence;
