"use strict";
const Constants = require ("../../../Constants");
const BogWraithBase = require("../set6ED/BogWraith");

class BogWraith extends BogWraithBase {
  constructor(game) {
    super(game, "Bog Wraith", "Starter 1999", "S99");
  }
}

module.exports = BogWraith;
