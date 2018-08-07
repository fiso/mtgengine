"use strict";
const Constants = require ("../../../Constants");
const DismantlingBlowBase = require("../setC18/DismantlingBlow");

class DismantlingBlow extends DismantlingBlowBase {
  constructor (game) {
    super(game, "Dismantling Blow", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = DismantlingBlow;
