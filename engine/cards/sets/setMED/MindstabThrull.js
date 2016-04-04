"use strict";
const Constants = require ("../../../Constants");
const MindstabThrullBase = require("../setFEM/MindstabThrull");

class MindstabThrull extends MindstabThrullBase {
  constructor(game) {
    super(game, "Mindstab Thrull", "Masters Edition", "MED");
  }
}

module.exports = MindstabThrull;
