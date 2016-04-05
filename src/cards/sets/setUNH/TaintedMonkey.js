"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TaintedMonkey extends UnimplementedCard {
  constructor(game) {
    super(game, "Tainted Monkey", "Unhinged", "UNH");
  }
}

module.exports = TaintedMonkey;
