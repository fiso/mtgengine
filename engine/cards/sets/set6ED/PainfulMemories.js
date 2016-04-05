"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PainfulMemories extends UnimplementedCard {
  constructor(game) {
    super(game, "Painful Memories", "Classic Sixth Edition", "6ED");
  }
}

module.exports = PainfulMemories;
