"use strict";
const Constants = require ("../../../Constants");
const DragDownBase = require("../setMMA/DragDown");

class DragDown extends DragDownBase {
  constructor (game) {
    super(game, "Drag Down", "Conflux", "CON");
  }
}

module.exports = DragDown;
