"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlindFury extends UnimplementedCard {
  constructor (game) {
    super(game, "Blind Fury", "Mirage", "MIR");
  }
}

module.exports = BlindFury;
