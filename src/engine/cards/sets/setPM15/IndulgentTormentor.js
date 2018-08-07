"use strict";
const Constants = require ("../../../Constants");
const IndulgentTormentorBase = require("../setIMA/IndulgentTormentor");

class IndulgentTormentor extends IndulgentTormentorBase {
  constructor (game) {
    super(game, "Indulgent Tormentor", "Magic 2015 Promos", "PM15");
  }
}

module.exports = IndulgentTormentor;
