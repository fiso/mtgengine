"use strict";
const Constants = require ("../../../Constants");
const FurnaceWhelpBase = require("../setARC/FurnaceWhelp");

class FurnaceWhelp extends FurnaceWhelpBase {
  constructor(game) {
    super(game, "Furnace Whelp", "Tenth Edition", "10E");
  }
}

module.exports = FurnaceWhelp;
