"use strict";
const Constants = require ("../../../Constants");
const MindstabThrullBase = require("../setMED/MindstabThrull");

class MindstabThrull extends MindstabThrullBase {
  constructor (game) {
    super(game, "Mindstab Thrull", "Fallen Empires", "FEM");
  }
}

module.exports = MindstabThrull;
