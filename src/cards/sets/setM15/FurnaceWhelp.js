"use strict";
const Constants = require ("../../../Constants");
const FurnaceWhelpBase = require("../setARC/FurnaceWhelp");

class FurnaceWhelp extends FurnaceWhelpBase {
  constructor (game) {
    super(game, "Furnace Whelp", "Magic 2015 Core Set", "M15");
  }
}

module.exports = FurnaceWhelp;
