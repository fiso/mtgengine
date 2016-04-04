"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MossDiamondBase = require("../set6ED/MossDiamond.js");

class MossDiamond extends MossDiamondBase {
  constructor(game) {
    super(game, "Moss Diamond", "Commander 2014", "C14");
  }
}

module.exports = MossDiamond;
