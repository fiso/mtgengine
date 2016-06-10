"use strict";
const Constants = require ("../../../Constants");
const KalastriaHighbornBase = require("../setWWK/KalastriaHighborn");

class KalastriaHighborn extends KalastriaHighbornBase {
  constructor (game) {
    super(game, "Kalastria Highborn", "WPN and Gateway", "pWPN");
  }
}

module.exports = KalastriaHighborn;
