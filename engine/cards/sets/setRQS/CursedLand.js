"use strict";
const Constants = require ("../../../Constants");
const CursedLandBase = require("../setCED/CursedLand");

class CursedLand extends CursedLandBase {
  constructor(game) {
    super(game, "Cursed Land", "Rivals Quick Start Set", "RQS");
  }
}

module.exports = CursedLand;
