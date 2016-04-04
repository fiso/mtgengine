"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeepWoodBase = require("../setPOR/DeepWood.js");

class DeepWood extends DeepWoodBase {
  constructor(game) {
    super(game, "Deep Wood", "Portal Second Age", "PO2");
  }
}

module.exports = DeepWood;
