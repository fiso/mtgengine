"use strict";
const Constants = require ("../../../Constants");
const RemandBase = require("../setMM2/Remand");

class Remand extends RemandBase {
  constructor (game) {
    super(game, "Remand", "Friday Night Magic 2008", "F08");
  }
}

module.exports = Remand;
