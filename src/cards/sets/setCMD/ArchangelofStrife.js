"use strict";
const Constants = require ("../../../Constants");
const ArchangelofStrifeBase = require("../setV15/ArchangelofStrife");

class ArchangelofStrife extends ArchangelofStrifeBase {
  constructor (game) {
    super(game, "Archangel of Strife", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ArchangelofStrife;
