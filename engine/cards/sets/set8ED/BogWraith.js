"use strict";
const Constants = require ("../../../Constants");
const BogWraithBase = require("../set6ED/BogWraith");

class BogWraith extends BogWraithBase {
  constructor(game) {
    super(game, "Bog Wraith", "Eighth Edition", "8ED");
  }
}

module.exports = BogWraith;
