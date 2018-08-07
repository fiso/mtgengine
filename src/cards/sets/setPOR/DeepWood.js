"use strict";
const Constants = require ("../../../Constants");
const DeepWoodBase = require("../setP02/DeepWood");

class DeepWood extends DeepWoodBase {
  constructor (game) {
    super(game, "Deep Wood", "Portal", "POR");
  }
}

module.exports = DeepWood;
