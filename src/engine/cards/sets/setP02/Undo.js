"use strict";
const Constants = require ("../../../Constants");
const UndoBase = require("../setS99/Undo");

class Undo extends UndoBase {
  constructor (game) {
    super(game, "Undo", "Portal Second Age", "P02");
  }
}

module.exports = Undo;
