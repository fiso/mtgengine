"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MossDiamond extends UnimplementedCard {
  constructor(game) {
    super(game, "Moss Diamond", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MossDiamond;
