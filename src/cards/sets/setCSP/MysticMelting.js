"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticMelting extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystic Melting", "Coldsnap", "CSP");
  }
}

module.exports = MysticMelting;
