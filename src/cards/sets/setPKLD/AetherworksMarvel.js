"use strict";
const Constants = require ("../../../Constants");
const AetherworksMarvelBase = require("../setKLD/AetherworksMarvel");

class AetherworksMarvel extends AetherworksMarvelBase {
  constructor (game) {
    super(game, "Aetherworks Marvel", "Kaladesh Promos", "PKLD");
  }
}

module.exports = AetherworksMarvel;
