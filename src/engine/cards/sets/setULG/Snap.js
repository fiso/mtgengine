"use strict";
const Constants = require ("../../../Constants");
const SnapBase = require("../setDDS/Snap");

class Snap extends SnapBase {
  constructor (game) {
    super(game, "Snap", "Urza's Legacy", "ULG");
  }
}

module.exports = Snap;
