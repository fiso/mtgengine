"use strict";
const Constants = require ("../../../Constants");
const MossDiamondBase = require("../set6ED/MossDiamond");

class MossDiamond extends MossDiamondBase {
  constructor (game) {
    super(game, "Moss Diamond", "Seventh Edition", "7ED");
  }
}

module.exports = MossDiamond;
