"use strict";
const Constants = require ("../../../Constants");
const AquitectsWillBase = require("../setDDT/AquitectsWill");

class AquitectsWill extends AquitectsWillBase {
  constructor (game) {
    super(game, "Aquitect's Will", "Lorwyn", "LRW");
  }
}

module.exports = AquitectsWill;
