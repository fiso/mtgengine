"use strict";
const Constants = require ("../../../Constants");
const MossDiamondBase = require("../setCMA/MossDiamond");

class MossDiamond extends MossDiamondBase {
  constructor (game) {
    super(game, "Moss Diamond", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MossDiamond;
