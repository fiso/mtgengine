"use strict";
const Constants = require ("../../../Constants");
const KnightErrantBase = require("../set7ED/KnightErrant");

class KnightErrant extends KnightErrantBase {
  constructor (game) {
    super(game, "Knight Errant", "Portal", "POR");
  }
}

module.exports = KnightErrant;
