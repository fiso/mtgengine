"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MemoryLapse extends UnimplementedCard {
  constructor (game) {
    super(game, "Memory Lapse", "Eternal Masters", "EMA");
  }
}

module.exports = MemoryLapse;
