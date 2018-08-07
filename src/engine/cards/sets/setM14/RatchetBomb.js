"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RatchetBomb extends UnimplementedCard {
  constructor (game) {
    super(game, "Ratchet Bomb", "Magic 2014", "M14");
  }
}

module.exports = RatchetBomb;
