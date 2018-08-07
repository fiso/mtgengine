"use strict";
const Constants = require ("../../../Constants");
const GenjuoftheFensBase = require("../setGVL/GenjuoftheFens");

class GenjuoftheFens extends GenjuoftheFensBase {
  constructor (game) {
    super(game, "Genju of the Fens", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = GenjuoftheFens;
