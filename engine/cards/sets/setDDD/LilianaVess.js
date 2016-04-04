"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LilianaVessBase = require("../setDD3_GVL/LilianaVess.js");

class LilianaVess extends LilianaVessBase {
  constructor(game) {
    super(game, "Liliana Vess", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = LilianaVess;
