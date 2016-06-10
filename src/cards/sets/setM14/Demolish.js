"use strict";
const Constants = require ("../../../Constants");
const DemolishBase = require("../setAVR/Demolish");

class Demolish extends DemolishBase {
  constructor (game) {
    super(game, "Demolish", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Demolish;
