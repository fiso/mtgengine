"use strict";
const Constants = require ("../../../Constants");
const DragonsHoardBase = require("../setM19/DragonsHoard");

class DragonsHoard extends DragonsHoardBase {
  constructor (game) {
    super(game, "Dragon's Hoard", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = DragonsHoard;
