"use strict";
const Constants = require ("../../../Constants");
const BogWraithBase = require("../setM10/BogWraith");

class BogWraith extends BogWraithBase {
  constructor (game) {
    super(game, "Bog Wraith", "Ninth Edition", "9ED");
  }
}

module.exports = BogWraith;
