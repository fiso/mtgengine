"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SNEAKDispatcher extends UnimplementedCard {
  constructor (game) {
    super(game, "S.N.E.A.K. Dispatcher", "Unstable", "UST");
  }
}

module.exports = SNEAKDispatcher;
