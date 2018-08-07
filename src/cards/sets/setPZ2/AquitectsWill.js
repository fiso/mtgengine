"use strict";
const Constants = require ("../../../Constants");
const AquitectsWillBase = require("../setDDT/AquitectsWill");

class AquitectsWill extends AquitectsWillBase {
  constructor (game) {
    super(game, "Aquitect's Will", "You Make the Cube", "PZ2");
  }
}

module.exports = AquitectsWill;
