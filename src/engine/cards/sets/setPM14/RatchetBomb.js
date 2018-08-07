"use strict";
const Constants = require ("../../../Constants");
const RatchetBombBase = require("../setM14/RatchetBomb");

class RatchetBomb extends RatchetBombBase {
  constructor (game) {
    super(game, "Ratchet Bomb", "Magic 2014 Promos", "PM14");
  }
}

module.exports = RatchetBomb;
