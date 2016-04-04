"use strict";
const Constants = require ("../../../Constants");
const KnightErrantBase = require("../setPOR/KnightErrant");

class KnightErrant extends KnightErrantBase {
  constructor(game) {
    super(game, "Knight Errant", "Seventh Edition", "7ED");
  }
}

module.exports = KnightErrant;
