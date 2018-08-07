"use strict";
const Constants = require ("../../../Constants");
const KitesailCorsairBase = require("../setBBD/KitesailCorsair");

class KitesailCorsair extends KitesailCorsairBase {
  constructor (game) {
    super(game, "Kitesail Corsair", "Rivals of Ixalan", "RIX");
  }
}

module.exports = KitesailCorsair;
