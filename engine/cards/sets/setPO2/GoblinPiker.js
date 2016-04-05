"use strict";
const Constants = require ("../../../Constants");
const GoblinPikerBase = require("../setDPA/GoblinPiker");

class GoblinPiker extends GoblinPikerBase {
  constructor(game) {
    super(game, "Goblin Piker", "Portal Second Age", "PO2");
  }
}

module.exports = GoblinPiker;
