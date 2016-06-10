"use strict";
const Constants = require ("../../../Constants");
const VerdeloththeAncientBase = require("../setARC/VerdeloththeAncient");

class VerdeloththeAncient extends VerdeloththeAncientBase {
  constructor (game) {
    super(game, "Verdeloth the Ancient", "Modern Masters", "MMA");
  }
}

module.exports = VerdeloththeAncient;
