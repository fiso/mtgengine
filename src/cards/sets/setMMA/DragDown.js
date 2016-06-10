"use strict";
const Constants = require ("../../../Constants");
const DragDownBase = require("../setCON/DragDown");

class DragDown extends DragDownBase {
  constructor (game) {
    super(game, "Drag Down", "Modern Masters", "MMA");
  }
}

module.exports = DragDown;
