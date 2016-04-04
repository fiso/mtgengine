"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KnightErrantBase = require("../setPOR/KnightErrant.js");

class KnightErrant extends KnightErrantBase {
  constructor(game) {
    super(game, "Knight Errant", "Starter 2000", "S00");
  }
}

module.exports = KnightErrant;
