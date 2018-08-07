"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pegasus extends UnimplementedCard {
  constructor (game) {
    super(game, "Pegasus", "Commander 2014 Tokens", "TC14");
  }
}

module.exports = Pegasus;
