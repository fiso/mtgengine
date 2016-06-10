"use strict";
const Constants = require ("../../../Constants");
const PhyrexianDevourerBase = require("../setALL/PhyrexianDevourer");

class PhyrexianDevourer extends PhyrexianDevourerBase {
  constructor (game) {
    super(game, "Phyrexian Devourer", "Masters Edition II", "ME2");
  }
}

module.exports = PhyrexianDevourer;
