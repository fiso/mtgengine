"use strict";
const Constants = require ("../../../Constants");
const FurnaceofRathBase = require("../setDPA/FurnaceofRath");

class FurnaceofRath extends FurnaceofRathBase {
  constructor (game) {
    super(game, "Furnace of Rath", "Ninth Edition", "9ED");
  }
}

module.exports = FurnaceofRath;
