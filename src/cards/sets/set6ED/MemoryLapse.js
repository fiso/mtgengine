"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MemoryLapse extends UnimplementedCard {
  constructor (game) {
    super(game, "Memory Lapse", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MemoryLapse;
