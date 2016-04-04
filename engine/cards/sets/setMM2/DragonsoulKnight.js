"use strict";
const Constants = require ("../../../Constants");
const DragonsoulKnightBase = require("../setCON/DragonsoulKnight");

class DragonsoulKnight extends DragonsoulKnightBase {
  constructor(game) {
    super(game, "Dragonsoul Knight", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = DragonsoulKnight;
