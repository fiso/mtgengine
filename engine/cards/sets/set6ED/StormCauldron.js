"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StormCauldronBase = require("../setALL/StormCauldron.js");

class StormCauldron extends StormCauldronBase {
  constructor(game) {
    super(game, "Storm Cauldron", "Classic Sixth Edition", "6ED");
  }
}

module.exports = StormCauldron;
