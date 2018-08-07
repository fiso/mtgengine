"use strict";
const Constants = require ("../../../Constants");
const NaturalConnectionBase = require("../setDDR/NaturalConnection");

class NaturalConnection extends NaturalConnectionBase {
  constructor (game) {
    super(game, "Natural Connection", "Battle for Zendikar", "BFZ");
  }
}

module.exports = NaturalConnection;
