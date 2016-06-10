"use strict";
const Constants = require ("../../../Constants");
const DeepWoodBase = require("../setPOR/DeepWood");

class DeepWood extends DeepWoodBase {
  constructor (game) {
    super(game, "Deep Wood", "Portal Second Age", "PO2");
  }
}

module.exports = DeepWood;
