"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Squid extends UnimplementedCard {
  constructor (game) {
    super(game, "Squid", "Commander 2016 Tokens", "TC16");
  }
}

module.exports = Squid;
