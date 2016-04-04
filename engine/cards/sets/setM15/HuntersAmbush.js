"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HuntersAmbush extends Card {
  constructor(game) {
    super(game, "Hunter's Ambush", "Magic 2015 Core Set", "M15");
  }
}

module.exports = HuntersAmbush;
