"use strict";
const Constants = require ("../../../Constants");
const VerdeloththeAncientBase = require("../setMMA/VerdeloththeAncient");

class VerdeloththeAncient extends VerdeloththeAncientBase {
  constructor (game) {
    super(game, "Verdeloth the Ancient", "Invasion", "INV");
  }
}

module.exports = VerdeloththeAncient;
