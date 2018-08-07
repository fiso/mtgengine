"use strict";
const Constants = require ("../../../Constants");
const GideonJuraBase = require("../setE01/GideonJura");

class GideonJura extends GideonJuraBase {
  constructor (game) {
    super(game, "Gideon Jura", "Magic Online Promos", "PRM");
  }
}

module.exports = GideonJura;
