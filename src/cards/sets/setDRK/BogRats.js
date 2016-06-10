"use strict";
const Constants = require ("../../../Constants");
const BogRatsBase = require("../setCHR/BogRats");

class BogRats extends BogRatsBase {
  constructor (game) {
    super(game, "Bog Rats", "The Dark", "DRK");
  }
}

module.exports = BogRats;
