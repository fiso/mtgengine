"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LurkingEvil extends UnimplementedCard {
  constructor (game) {
    super(game, "Lurking Evil", "Urza's Saga", "USG");
  }
}

module.exports = LurkingEvil;
