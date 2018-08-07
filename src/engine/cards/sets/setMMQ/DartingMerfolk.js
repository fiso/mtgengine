"use strict";
const Constants = require ("../../../Constants");
const DartingMerfolkBase = require("../setWC01/DartingMerfolk");

class DartingMerfolk extends DartingMerfolkBase {
  constructor (game) {
    super(game, "Darting Merfolk", "Mercadian Masques", "MMQ");
  }
}

module.exports = DartingMerfolk;
