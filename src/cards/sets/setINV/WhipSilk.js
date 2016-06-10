"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhipSilk extends UnimplementedCard {
  constructor (game) {
    super(game, "Whip Silk", "Invasion", "INV");
  }
}

module.exports = WhipSilk;
