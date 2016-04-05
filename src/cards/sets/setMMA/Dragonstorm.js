"use strict";
const Constants = require ("../../../Constants");
const DragonstormBase = require("../setDRB/Dragonstorm");

class Dragonstorm extends DragonstormBase {
  constructor(game) {
    super(game, "Dragonstorm", "Modern Masters", "MMA");
  }
}

module.exports = Dragonstorm;
