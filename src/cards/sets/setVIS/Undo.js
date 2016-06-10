"use strict";
const Constants = require ("../../../Constants");
const UndoBase = require("../setPO2/Undo");

class Undo extends UndoBase {
  constructor (game) {
    super(game, "Undo", "Visions", "VIS");
  }
}

module.exports = Undo;
