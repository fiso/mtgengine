"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShipbreakerKrakenBase = require("../setpPRE/ShipbreakerKraken.js");

class ShipbreakerKraken extends ShipbreakerKrakenBase {
  constructor(game) {
    super(game, "Shipbreaker Kraken", "Theros", "THS");
  }
}

module.exports = ShipbreakerKraken;
