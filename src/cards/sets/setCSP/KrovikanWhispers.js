"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrovikanWhispers extends UnimplementedCard {
  constructor (game) {
    super(game, "Krovikan Whispers", "Coldsnap", "CSP");
  }
}

module.exports = KrovikanWhispers;
