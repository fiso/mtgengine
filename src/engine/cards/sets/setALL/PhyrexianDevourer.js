"use strict";
const Constants = require ("../../../Constants");
const PhyrexianDevourerBase = require("../setME2/PhyrexianDevourer");

class PhyrexianDevourer extends PhyrexianDevourerBase {
  constructor (game) {
    super(game, "Phyrexian Devourer", "Alliances", "ALL");
  }
}

module.exports = PhyrexianDevourer;
