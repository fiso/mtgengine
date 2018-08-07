"use strict";
const Constants = require ("../../../Constants");
const BogWraithBase = require("../setM10/BogWraith");

class BogWraith extends BogWraithBase {
  constructor (game) {
    super(game, "Bog Wraith", "Fourth Edition", "4ED");
  }
}

module.exports = BogWraith;
