"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BadRiver extends UnimplementedCard {
  constructor (game) {
    super(game, "Bad River", "Mirage", "MIR");
  }
}

module.exports = BadRiver;
