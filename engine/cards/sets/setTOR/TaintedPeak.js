"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TaintedPeak extends UnimplementedCard {
  constructor(game) {
    super(game, "Tainted Peak", "Torment", "TOR");
  }
}

module.exports = TaintedPeak;
