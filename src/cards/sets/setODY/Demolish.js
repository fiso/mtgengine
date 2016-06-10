"use strict";
const Constants = require ("../../../Constants");
const DemolishBase = require("../setAVR/Demolish");

class Demolish extends DemolishBase {
  constructor (game) {
    super(game, "Demolish", "Odyssey", "ODY");
  }
}

module.exports = Demolish;
