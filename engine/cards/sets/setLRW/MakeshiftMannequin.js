"use strict";
const Constants = require ("../../../Constants");
const MakeshiftMannequinBase = require("../setARC/MakeshiftMannequin");

class MakeshiftMannequin extends MakeshiftMannequinBase {
  constructor(game) {
    super(game, "Makeshift Mannequin", "Lorwyn", "LRW");
  }
}

module.exports = MakeshiftMannequin;
