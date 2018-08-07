"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MidnightDuelist extends UnimplementedCard {
  constructor (game) {
    super(game, "Midnight Duelist", "Avacyn Restored", "AVR");
  }
}

module.exports = MidnightDuelist;
