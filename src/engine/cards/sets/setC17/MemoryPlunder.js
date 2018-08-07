"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MemoryPlunder extends UnimplementedCard {
  constructor (game) {
    super(game, "Memory Plunder", "Commander 2017", "C17");
  }
}

module.exports = MemoryPlunder;
