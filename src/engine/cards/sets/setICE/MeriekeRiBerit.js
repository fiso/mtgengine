"use strict";
const Constants = require ("../../../Constants");
const MeriekeRiBeritBase = require("../setTSB/MeriekeRiBerit");

class MeriekeRiBerit extends MeriekeRiBeritBase {
  constructor (game) {
    super(game, "Merieke Ri Berit", "Ice Age", "ICE");
  }
}

module.exports = MeriekeRiBerit;
