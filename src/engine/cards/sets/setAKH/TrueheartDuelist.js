"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrueheartDuelist extends UnimplementedCard {
  constructor (game) {
    super(game, "Trueheart Duelist", "Amonkhet", "AKH");
  }
}

module.exports = TrueheartDuelist;
