"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiftofTusks extends Card {
  constructor(game) {
    super(game, "Gift of Tusks", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = GiftofTusks;
