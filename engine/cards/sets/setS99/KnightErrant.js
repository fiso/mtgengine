"use strict";
const Constants = require ("../../../Constants");
const KnightErrantBase = require("../setPOR/KnightErrant");

class KnightErrant extends KnightErrantBase {
  constructor(game) {
    super(game, "Knight Errant", "Starter 1999", "S99");
  }
}

module.exports = KnightErrant;
