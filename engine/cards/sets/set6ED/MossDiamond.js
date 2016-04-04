"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MossDiamond extends Card {
  constructor(game) {
    super(game, "Moss Diamond", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MossDiamond;
