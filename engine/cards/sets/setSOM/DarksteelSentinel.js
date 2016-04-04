"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarksteelSentinel extends Card {
  constructor(game) {
    super(game, "Darksteel Sentinel", "Scars of Mirrodin", "SOM");
  }
}

module.exports = DarksteelSentinel;
