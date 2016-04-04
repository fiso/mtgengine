"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BullHippo extends Card {
  constructor(game) {
    super(game, "Bull Hippo", "Portal", "POR");
  }
}

module.exports = BullHippo;
