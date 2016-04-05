"use strict";
const Constants = require ("../../../Constants");
const ThallidDevourerBase = require("../setFEM/ThallidDevourer");

class ThallidDevourer extends ThallidDevourerBase {
  constructor(game) {
    super(game, "Thallid Devourer", "Masters Edition II", "ME2");
  }
}

module.exports = ThallidDevourer;
