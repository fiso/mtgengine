"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunscapeApprentice extends UnimplementedCard {
  constructor(game) {
    super(game, "Sunscape Apprentice", "Invasion", "INV");
  }
}

module.exports = SunscapeApprentice;
