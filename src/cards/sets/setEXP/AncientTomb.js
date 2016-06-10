"use strict";
const Constants = require ("../../../Constants");
const AncientTombBase = require("../setV12/AncientTomb");

class AncientTomb extends AncientTombBase {
  constructor (game) {
    super(game, "Ancient Tomb", "Zendikar Expedition", "EXP");
  }
}

module.exports = AncientTomb;
