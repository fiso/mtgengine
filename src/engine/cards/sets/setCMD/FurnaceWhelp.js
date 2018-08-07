"use strict";
const Constants = require ("../../../Constants");
const FurnaceWhelpBase = require("../setIMA/FurnaceWhelp");

class FurnaceWhelp extends FurnaceWhelpBase {
  constructor (game) {
    super(game, "Furnace Whelp", "Commander 2011", "CMD");
  }
}

module.exports = FurnaceWhelp;
