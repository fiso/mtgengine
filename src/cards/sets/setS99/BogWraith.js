"use strict";
const Constants = require ("../../../Constants");
const BogWraithBase = require("../setM10/BogWraith");

class BogWraith extends BogWraithBase {
  constructor (game) {
    super(game, "Bog Wraith", "Starter 1999", "S99");
  }
}

module.exports = BogWraith;
