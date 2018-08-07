"use strict";
const Constants = require ("../../../Constants");
const GoblinPikerBase = require("../setM12/GoblinPiker");

class GoblinPiker extends GoblinPikerBase {
  constructor (game) {
    super(game, "Goblin Piker", "Magic 2011", "M11");
  }
}

module.exports = GoblinPiker;
