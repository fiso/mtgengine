"use strict";
const Constants = require ("../../../Constants");
const ShipbreakerKrakenBase = require("../setTHS/ShipbreakerKraken");

class ShipbreakerKraken extends ShipbreakerKrakenBase {
  constructor (game) {
    super(game, "Shipbreaker Kraken", "Theros Promos", "PTHS");
  }
}

module.exports = ShipbreakerKraken;
