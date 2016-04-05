"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThunderscapeApprentice extends UnimplementedCard {
  constructor(game) {
    super(game, "Thunderscape Apprentice", "Invasion", "INV");
  }
}

module.exports = ThunderscapeApprentice;
