"use strict";
const Constants = require ("../../../Constants");
const BogRatsBase = require("../setCHR/BogRats");

class BogRats extends BogRatsBase {
  constructor(game) {
    super(game, "Bog Rats", "Classic Sixth Edition", "6ED");
  }
}

module.exports = BogRats;
