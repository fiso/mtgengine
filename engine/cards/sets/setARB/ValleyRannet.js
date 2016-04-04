"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ValleyRannet extends Card {
  constructor(game) {
    super(game, "Valley Rannet", "Alara Reborn", "ARB");
  }
}

module.exports = ValleyRannet;
