"use strict";
const Constants = require ("../../../Constants");
const BogWitchBase = require("../setARC/BogWitch");

class BogWitch extends BogWitchBase {
  constructor (game) {
    super(game, "Bog Witch", "Mercadian Masques", "MMQ");
  }
}

module.exports = BogWitch;
