"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PaupersCage extends UnimplementedCard {
  constructor (game) {
    super(game, "Paupers' Cage", "Mirage", "MIR");
  }
}

module.exports = PaupersCage;
