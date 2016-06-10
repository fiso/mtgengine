"use strict";
const Constants = require ("../../../Constants");
const PhyrexianRagerBase = require("../setAPC/PhyrexianRager");

class PhyrexianRager extends PhyrexianRagerBase {
  constructor (game) {
    super(game, "Phyrexian Rager", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = PhyrexianRager;
