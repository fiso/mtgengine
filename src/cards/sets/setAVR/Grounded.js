"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Grounded extends UnimplementedCard {
  constructor (game) {
    super(game, "Grounded", "Avacyn Restored", "AVR");
  }
}

module.exports = Grounded;
