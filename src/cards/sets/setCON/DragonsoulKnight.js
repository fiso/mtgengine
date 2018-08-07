"use strict";
const Constants = require ("../../../Constants");
const DragonsoulKnightBase = require("../setMM2/DragonsoulKnight");

class DragonsoulKnight extends DragonsoulKnightBase {
  constructor (game) {
    super(game, "Dragonsoul Knight", "Conflux", "CON");
  }
}

module.exports = DragonsoulKnight;
