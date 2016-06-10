"use strict";
const Constants = require ("../../../Constants");
const GideonJuraBase = require("../setM12/GideonJura");

class GideonJura extends GideonJuraBase {
  constructor (game) {
    super(game, "Gideon Jura", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = GideonJura;
