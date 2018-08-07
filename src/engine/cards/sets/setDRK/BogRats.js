"use strict";
const Constants = require ("../../../Constants");
const BogRatsBase = require("../set6ED/BogRats");

class BogRats extends BogRatsBase {
  constructor (game) {
    super(game, "Bog Rats", "The Dark", "DRK");
  }
}

module.exports = BogRats;
