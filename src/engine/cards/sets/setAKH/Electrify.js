"use strict";
const Constants = require ("../../../Constants");
const ElectrifyBase = require("../setM19/Electrify");

class Electrify extends ElectrifyBase {
  constructor (game) {
    super(game, "Electrify", "Amonkhet", "AKH");
  }
}

module.exports = Electrify;
