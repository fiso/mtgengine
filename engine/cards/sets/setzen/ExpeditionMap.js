"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ExpeditionMapBase = require("../setMM2/ExpeditionMap.js");

class ExpeditionMap extends ExpeditionMapBase {
  constructor(game) {
    super(game, "Expedition Map", "Zendikar", "ZEN");
  }
}

module.exports = ExpeditionMap;
