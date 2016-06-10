"use strict";
const Constants = require ("../../../Constants");
const DemolishBase = require("../setAVR/Demolish");

class Demolish extends DemolishBase {
  constructor (game) {
    super(game, "Demolish", "Ninth Edition", "9ED");
  }
}

module.exports = Demolish;
