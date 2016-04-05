"use strict";
const Constants = require ("../../../Constants");
const PhyrexianRagerBase = require("../setAPC/PhyrexianRager");

class PhyrexianRager extends PhyrexianRagerBase {
  constructor(game) {
    super(game, "Phyrexian Rager", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = PhyrexianRager;
