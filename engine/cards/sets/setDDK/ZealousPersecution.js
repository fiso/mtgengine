"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZealousPersecutionBase = require("../setARB/ZealousPersecution.js");

class ZealousPersecution extends ZealousPersecutionBase {
  constructor(game) {
    super(game, "Zealous Persecution", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = ZealousPersecution;
