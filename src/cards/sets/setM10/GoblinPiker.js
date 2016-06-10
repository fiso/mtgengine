"use strict";
const Constants = require ("../../../Constants");
const GoblinPikerBase = require("../setDPA/GoblinPiker");

class GoblinPiker extends GoblinPikerBase {
  constructor (game) {
    super(game, "Goblin Piker", "Magic 2010", "M10");
  }
}

module.exports = GoblinPiker;
