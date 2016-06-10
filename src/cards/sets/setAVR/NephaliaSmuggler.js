"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NephaliaSmuggler extends UnimplementedCard {
  constructor (game) {
    super(game, "Nephalia Smuggler", "Avacyn Restored", "AVR");
  }
}

module.exports = NephaliaSmuggler;
