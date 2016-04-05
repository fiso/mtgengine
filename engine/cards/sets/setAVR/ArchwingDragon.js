"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArchwingDragon extends UnimplementedCard {
  constructor(game) {
    super(game, "Archwing Dragon", "Avacyn Restored", "AVR");
  }
}

module.exports = ArchwingDragon;
