"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Daze extends UnimplementedCard {
  constructor (game) {
    super(game, "Daze", "Amonkhet Invocations", "MP2");
  }
}

module.exports = Daze;
