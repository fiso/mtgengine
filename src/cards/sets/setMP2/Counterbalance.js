"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Counterbalance extends UnimplementedCard {
  constructor (game) {
    super(game, "Counterbalance", "Amonkhet Invocations", "MP2");
  }
}

module.exports = Counterbalance;
