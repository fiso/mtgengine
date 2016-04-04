"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChitinousCloak extends Card {
  constructor(game) {
    super(game, "Chitinous Cloak", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ChitinousCloak;
