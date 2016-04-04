"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NaturesCloak extends Card {
  constructor(game) {
    super(game, "Nature's Cloak", "Portal", "POR");
  }
}

module.exports = NaturesCloak;
