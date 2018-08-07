"use strict";
const Constants = require ("../../../Constants");
const DragonstormBase = require("../setMMA/Dragonstorm");

class Dragonstorm extends DragonstormBase {
  constructor (game) {
    super(game, "Dragonstorm", "Scourge", "SCG");
  }
}

module.exports = Dragonstorm;
