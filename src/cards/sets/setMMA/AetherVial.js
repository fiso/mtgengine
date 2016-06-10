"use strict";
const Constants = require ("../../../Constants");
const AetherVialBase = require("../setDST/AetherVial");

class AetherVial extends AetherVialBase {
  constructor (game) {
    super(game, "Æther Vial", "Modern Masters", "MMA");
  }
}

module.exports = AetherVial;
