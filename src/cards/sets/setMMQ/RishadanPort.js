"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RishadanPort extends UnimplementedCard {
  constructor (game) {
    super(game, "Rishadan Port", "Mercadian Masques", "MMQ");
  }
}

module.exports = RishadanPort;
