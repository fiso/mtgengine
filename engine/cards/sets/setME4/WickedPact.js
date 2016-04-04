"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WickedPact extends Card {
  constructor(game) {
    super(game, "Wicked Pact", "Masters Edition IV", "ME4");
  }
}

module.exports = WickedPact;
