"use strict";
const Constants = require ("../../../Constants");
const AncientTombBase = require("../setV12/AncientTomb");

class AncientTomb extends AncientTombBase {
  constructor(game) {
    super(game, "Ancient Tomb", "Tempest", "TMP");
  }
}

module.exports = AncientTomb;
