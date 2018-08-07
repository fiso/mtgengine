"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LairDelve extends UnimplementedCard {
  constructor (game) {
    super(game, "Lair Delve", "Avacyn Restored", "AVR");
  }
}

module.exports = LairDelve;
