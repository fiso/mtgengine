"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MidnightGuard extends Card {
  constructor(game) {
    super(game, "Midnight Guard", "Dark Ascension", "DKA");
  }
}

module.exports = MidnightGuard;
