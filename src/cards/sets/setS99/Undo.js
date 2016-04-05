"use strict";
const Constants = require ("../../../Constants");
const UndoBase = require("../setPO2/Undo");

class Undo extends UndoBase {
  constructor(game) {
    super(game, "Undo", "Starter 1999", "S99");
  }
}

module.exports = Undo;
