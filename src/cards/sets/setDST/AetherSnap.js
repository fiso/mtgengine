"use strict";
const Constants = require ("../../../Constants");
const AetherSnapBase = require("../setC14/AetherSnap");

class AetherSnap extends AetherSnapBase {
  constructor (game) {
    super(game, "Æther Snap", "Darksteel", "DST");
  }
}

module.exports = AetherSnap;
