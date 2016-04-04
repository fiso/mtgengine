"use strict";
const Constants = require ("../../../Constants");
const ExpeditionMapBase = require("../setMM2/ExpeditionMap");

class ExpeditionMap extends ExpeditionMapBase {
  constructor(game) {
    super(game, "Expedition Map", "Zendikar", "ZEN");
  }
}

module.exports = ExpeditionMap;
