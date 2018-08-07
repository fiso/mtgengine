"use strict";
const Constants = require ("../../../Constants");
const KalastriaHighbornBase = require("../setPWWK/KalastriaHighborn");

class KalastriaHighborn extends KalastriaHighbornBase {
  constructor (game) {
    super(game, "Kalastria Highborn", "Magic Online Promos", "PRM");
  }
}

module.exports = KalastriaHighborn;
