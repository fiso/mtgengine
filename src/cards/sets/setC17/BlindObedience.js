"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlindObedience extends UnimplementedCard {
  constructor (game) {
    super(game, "Blind Obedience", "Commander 2017", "C17");
  }
}

module.exports = BlindObedience;
