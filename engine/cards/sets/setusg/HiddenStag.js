"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HiddenStag extends Card {
  constructor(game) {
    super(game, "Hidden Stag", "Urza's Saga", "USG");
  }
}

module.exports = HiddenStag;
