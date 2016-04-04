"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StalkingYeti extends Card {
  constructor(game) {
    super(game, "Stalking Yeti", "Coldsnap", "CSP");
  }
}

module.exports = StalkingYeti;
