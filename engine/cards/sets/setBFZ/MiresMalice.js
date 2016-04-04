"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MiresMalice extends Card {
  constructor(game) {
    super(game, "Mire's Malice", "Battle for Zendikar", "BFZ");
  }
}

module.exports = MiresMalice;
