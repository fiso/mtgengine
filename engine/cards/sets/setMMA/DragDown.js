"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DragDownBase = require("../setCON/DragDown.js");

class DragDown extends DragDownBase {
  constructor(game) {
    super(game, "Drag Down", "Modern Masters", "MMA");
  }
}

module.exports = DragDown;
