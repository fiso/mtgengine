"use strict";
const Constants = require ("../../../Constants");
const ShipbreakerKrakenBase = require("../setpPRE/ShipbreakerKraken");

class ShipbreakerKraken extends ShipbreakerKrakenBase {
  constructor(game) {
    super(game, "Shipbreaker Kraken", "Theros", "THS");
  }
}

module.exports = ShipbreakerKraken;
