"use strict";
const Constants = require ("../../../Constants");
const ShipbreakerKrakenBase = require("../setTHS/ShipbreakerKraken");

class ShipbreakerKraken extends ShipbreakerKrakenBase {
  constructor (game) {
    super(game, "Shipbreaker Kraken", "Magic Online Promos", "PRM");
  }
}

module.exports = ShipbreakerKraken;
