"use strict";
const Constants = require ("../../../Constants");
const KnightErrantBase = require("../set7ED/KnightErrant");

class KnightErrant extends KnightErrantBase {
  constructor (game) {
    super(game, "Knight Errant", "Starter 2000", "S00");
  }
}

module.exports = KnightErrant;
