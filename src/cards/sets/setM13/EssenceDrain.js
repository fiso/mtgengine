"use strict";
const Constants = require ("../../../Constants");
const EssenceDrainBase = require("../setDST/EssenceDrain");

class EssenceDrain extends EssenceDrainBase {
  constructor (game) {
    super(game, "Essence Drain", "Magic 2013", "M13");
  }
}

module.exports = EssenceDrain;
