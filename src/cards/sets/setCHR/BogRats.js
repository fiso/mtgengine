"use strict";
const Constants = require ("../../../Constants");
const BogRatsBase = require("../set6ED/BogRats");

class BogRats extends BogRatsBase {
  constructor (game) {
    super(game, "Bog Rats", "Chronicles", "CHR");
  }
}

module.exports = BogRats;
