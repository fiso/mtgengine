"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BadAss extends UnimplementedCard {
  constructor(game) {
    super(game, "Bad Ass", "Unhinged", "UNH");
  }
}

module.exports = BadAss;
