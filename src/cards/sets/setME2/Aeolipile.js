"use strict";
const Constants = require ("../../../Constants");
const AeolipileBase = require("../setFEM/Aeolipile");

class Aeolipile extends AeolipileBase {
  constructor (game) {
    super(game, "Aeolipile", "Masters Edition II", "ME2");
  }
}

module.exports = Aeolipile;
