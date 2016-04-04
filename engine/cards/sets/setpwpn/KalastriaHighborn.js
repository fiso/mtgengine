"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KalastriaHighbornBase = require("../setWWK/KalastriaHighborn.js");

class KalastriaHighborn extends KalastriaHighbornBase {
  constructor(game) {
    super(game, "Kalastria Highborn", "WPN and Gateway", "pWPN");
  }
}

module.exports = KalastriaHighborn;
