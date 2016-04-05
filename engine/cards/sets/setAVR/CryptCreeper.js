"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CryptCreeper extends UnimplementedCard {
  constructor(game) {
    super(game, "Crypt Creeper", "Avacyn Restored", "AVR");
  }
}

module.exports = CryptCreeper;
