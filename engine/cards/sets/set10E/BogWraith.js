"use strict";
const Constants = require ("../../../Constants");
const BogWraithBase = require("../set6ED/BogWraith");

class BogWraith extends BogWraithBase {
  constructor(game) {
    super(game, "Bog Wraith", "Tenth Edition", "10E");
  }
}

module.exports = BogWraith;
