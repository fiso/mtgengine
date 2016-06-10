"use strict";
const Constants = require ("../../../Constants");
const AncientTombBase = require("../setV12/AncientTomb");

class AncientTomb extends AncientTombBase {
  constructor (game) {
    super(game, "Ancient Tomb", "Vintage Masters", "VMA");
  }
}

module.exports = AncientTomb;
