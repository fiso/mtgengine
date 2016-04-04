"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WalkeroftheWastes extends Card {
  constructor(game) {
    super(game, "Walker of the Wastes", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = WalkeroftheWastes;
