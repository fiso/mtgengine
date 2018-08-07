"use strict";
const Constants = require ("../../../Constants");
const TeferisMoatBase = require("../setTSB/TeferisMoat");

class TeferisMoat extends TeferisMoatBase {
  constructor (game) {
    super(game, "Teferi's Moat", "Invasion", "INV");
  }
}

module.exports = TeferisMoat;
