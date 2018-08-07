"use strict";
const Constants = require ("../../../Constants");
const IndulgentTormentorBase = require("../setIMA/IndulgentTormentor");

class IndulgentTormentor extends IndulgentTormentorBase {
  constructor (game) {
    super(game, "Indulgent Tormentor", "Magic 2015", "M15");
  }
}

module.exports = IndulgentTormentor;
