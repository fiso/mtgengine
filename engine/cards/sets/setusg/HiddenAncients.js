"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HiddenAncients extends Card {
  constructor(game) {
    super(game, "Hidden Ancients", "Urza's Saga", "USG");
  }
}

module.exports = HiddenAncients;
