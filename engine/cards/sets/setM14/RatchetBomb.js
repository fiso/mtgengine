"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RatchetBomb extends Card {
  constructor(game) {
    super(game, "Ratchet Bomb", "Magic 2014 Core Set", "M14");
  }
}

module.exports = RatchetBomb;
