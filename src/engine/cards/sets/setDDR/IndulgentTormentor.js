"use strict";
const Constants = require ("../../../Constants");
const IndulgentTormentorBase = require("../setIMA/IndulgentTormentor");

class IndulgentTormentor extends IndulgentTormentorBase {
  constructor (game) {
    super(game, "Indulgent Tormentor", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = IndulgentTormentor;
