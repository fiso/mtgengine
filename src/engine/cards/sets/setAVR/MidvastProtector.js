"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MidvastProtector extends UnimplementedCard {
  constructor (game) {
    super(game, "Midvast Protector", "Avacyn Restored", "AVR");
  }
}

module.exports = MidvastProtector;
