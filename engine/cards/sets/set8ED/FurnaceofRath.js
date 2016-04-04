"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FurnaceofRathBase = require("../setDPA/FurnaceofRath.js");

class FurnaceofRath extends FurnaceofRathBase {
  constructor(game) {
    super(game, "Furnace of Rath", "Eighth Edition", "8ED");
  }
}

module.exports = FurnaceofRath;
