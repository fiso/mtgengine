"use strict";
const Constants = require ("../../../Constants");
const WastelandStranglerBase = require("../setBFZ/WastelandStrangler");

class WastelandStrangler extends WastelandStranglerBase {
  constructor (game) {
    super(game, "Wasteland Strangler", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = WastelandStrangler;
