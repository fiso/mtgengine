"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalseMemories extends UnimplementedCard {
  constructor(game) {
    super(game, "False Memories", "Torment", "TOR");
  }
}

module.exports = FalseMemories;
