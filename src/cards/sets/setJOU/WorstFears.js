"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WorstFears extends UnimplementedCard {
  constructor(game) {
    super(game, "Worst Fears", "Journey into Nyx", "JOU");
  }
}

module.exports = WorstFears;
