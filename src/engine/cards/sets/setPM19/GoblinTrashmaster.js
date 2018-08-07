"use strict";
const Constants = require ("../../../Constants");
const GoblinTrashmasterBase = require("../setM19/GoblinTrashmaster");

class GoblinTrashmaster extends GoblinTrashmasterBase {
  constructor (game) {
    super(game, "Goblin Trashmaster", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = GoblinTrashmaster;
