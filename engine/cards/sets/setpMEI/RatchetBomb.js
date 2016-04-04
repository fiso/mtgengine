"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RatchetBombBase = require("../setM14/RatchetBomb.js");

class RatchetBomb extends RatchetBombBase {
  constructor(game) {
    super(game, "Ratchet Bomb", "Media Inserts", "pMEI");
  }
}

module.exports = RatchetBomb;
