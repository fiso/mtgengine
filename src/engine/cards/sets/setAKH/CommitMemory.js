"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CommitMemory extends UnimplementedCard {
  constructor (game) {
    super(game, "Commit // Memory", "Amonkhet", "AKH");
  }
}

module.exports = CommitMemory;
