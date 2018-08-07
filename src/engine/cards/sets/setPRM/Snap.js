"use strict";
const Constants = require ("../../../Constants");
const SnapBase = require("../setDDS/Snap");

class Snap extends SnapBase {
  constructor (game) {
    super(game, "Snap", "Magic Online Promos", "PRM");
  }
}

module.exports = Snap;
