"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BriarPatch extends Card {
  constructor(game) {
    super(game, "Briar Patch", "Mercadian Masques", "MMQ");
  }
}

module.exports = BriarPatch;
