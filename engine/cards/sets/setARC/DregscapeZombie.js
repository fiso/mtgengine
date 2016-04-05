"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DregscapeZombie extends UnimplementedCard {
  constructor(game) {
    super(game, "Dregscape Zombie", "Archenemy", "ARC");
  }
}

module.exports = DregscapeZombie;
