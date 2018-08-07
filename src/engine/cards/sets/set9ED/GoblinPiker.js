"use strict";
const Constants = require ("../../../Constants");
const GoblinPikerBase = require("../setM12/GoblinPiker");

class GoblinPiker extends GoblinPikerBase {
  constructor (game) {
    super(game, "Goblin Piker", "Ninth Edition", "9ED");
  }
}

module.exports = GoblinPiker;
