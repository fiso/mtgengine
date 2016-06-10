"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NightscapeApprentice extends UnimplementedCard {
  constructor (game) {
    super(game, "Nightscape Apprentice", "Invasion", "INV");
  }
}

module.exports = NightscapeApprentice;
