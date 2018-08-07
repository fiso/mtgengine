"use strict";
const Constants = require ("../../../Constants");
const AeolipileBase = require("../setME2/Aeolipile");

class Aeolipile extends AeolipileBase {
  constructor (game) {
    super(game, "Aeolipile", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = Aeolipile;
