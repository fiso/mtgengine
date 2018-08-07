"use strict";
const Constants = require ("../../../Constants");
const GenjuoftheCedarsBase = require("../setGVL/GenjuoftheCedars");

class GenjuoftheCedars extends GenjuoftheCedarsBase {
  constructor (game) {
    super(game, "Genju of the Cedars", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = GenjuoftheCedars;
