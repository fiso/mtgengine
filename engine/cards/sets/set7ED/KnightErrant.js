"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KnightErrantBase = require("../setPOR/KnightErrant.js");

class KnightErrant extends KnightErrantBase {
  constructor(game) {
    super(game, "Knight Errant", "Seventh Edition", "7ED");
  }
}

module.exports = KnightErrant;
