"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishLookout extends Card {
  constructor(game) {
    super(game, "Elvish Lookout", "Urza's Destiny", "UDS");
  }
}

module.exports = ElvishLookout;
