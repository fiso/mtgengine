"use strict";
const Constants = require ("../../../Constants");
const DemolishBase = require("../setAVR/Demolish");

class Demolish extends DemolishBase {
  constructor (game) {
    super(game, "Demolish", "Eighth Edition", "8ED");
  }
}

module.exports = Demolish;
