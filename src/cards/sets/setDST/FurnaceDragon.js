"use strict";
const Constants = require ("../../../Constants");
const FurnaceDragonBase = require("../setWC04/FurnaceDragon");

class FurnaceDragon extends FurnaceDragonBase {
  constructor (game) {
    super(game, "Furnace Dragon", "Darksteel", "DST");
  }
}

module.exports = FurnaceDragon;
