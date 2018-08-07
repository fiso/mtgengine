"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoonlightGeist extends UnimplementedCard {
  constructor (game) {
    super(game, "Moonlight Geist", "Avacyn Restored", "AVR");
  }
}

module.exports = MoonlightGeist;
