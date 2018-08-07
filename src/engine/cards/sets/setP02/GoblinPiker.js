"use strict";
const Constants = require ("../../../Constants");
const GoblinPikerBase = require("../setM12/GoblinPiker");

class GoblinPiker extends GoblinPikerBase {
  constructor (game) {
    super(game, "Goblin Piker", "Portal Second Age", "P02");
  }
}

module.exports = GoblinPiker;
