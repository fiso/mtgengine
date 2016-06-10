"use strict";
const Constants = require ("../../../Constants");
const BogWraithBase = require("../set6ED/BogWraith");

class BogWraith extends BogWraithBase {
  constructor (game) {
    super(game, "Bog Wraith", "Fifth Edition", "5ED");
  }
}

module.exports = BogWraith;
