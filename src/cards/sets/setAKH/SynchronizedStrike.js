"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SynchronizedStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Synchronized Strike", "Amonkhet", "AKH");
  }
}

module.exports = SynchronizedStrike;
