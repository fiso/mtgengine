"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadRingers extends UnimplementedCard {
  constructor(game) {
    super(game, "Dead Ringers", "Apocalypse", "APC");
  }
}

module.exports = DeadRingers;
