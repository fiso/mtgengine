"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HauntedGuardian extends UnimplementedCard {
  constructor (game) {
    super(game, "Haunted Guardian", "Avacyn Restored", "AVR");
  }
}

module.exports = HauntedGuardian;
