"use strict";
const Constants = require ("../../../Constants");
const MossDiamondBase = require("../setCMA/MossDiamond");

class MossDiamond extends MossDiamondBase {
  constructor (game) {
    super(game, "Moss Diamond", "Mirage", "MIR");
  }
}

module.exports = MossDiamond;
