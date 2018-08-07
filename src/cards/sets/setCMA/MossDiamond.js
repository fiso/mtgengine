"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MossDiamond extends UnimplementedCard {
  constructor (game) {
    super(game, "Moss Diamond", "Commander Anthology", "CMA");
  }
}

module.exports = MossDiamond;
