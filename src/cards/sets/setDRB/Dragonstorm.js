"use strict";
const Constants = require ("../../../Constants");
const DragonstormBase = require("../setMMA/Dragonstorm");

class Dragonstorm extends DragonstormBase {
  constructor (game) {
    super(game, "Dragonstorm", "From the Vault: Dragons", "DRB");
  }
}

module.exports = Dragonstorm;
