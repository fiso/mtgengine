"use strict";
const Constants = require ("../../../Constants");
const BogWraithBase = require("../setM10/BogWraith");

class BogWraith extends BogWraithBase {
  constructor (game) {
    super(game, "Bog Wraith", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = BogWraith;
