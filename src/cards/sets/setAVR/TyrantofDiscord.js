"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TyrantofDiscord extends UnimplementedCard {
  constructor (game) {
    super(game, "Tyrant of Discord", "Avacyn Restored", "AVR");
  }
}

module.exports = TyrantofDiscord;
