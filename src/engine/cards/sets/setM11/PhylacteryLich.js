"use strict";
const Constants = require ("../../../Constants");
const PhylacteryLichBase = require("../setM19/PhylacteryLich");

class PhylacteryLich extends PhylacteryLichBase {
  constructor (game) {
    super(game, "Phylactery Lich", "Magic 2011", "M11");
  }
}

module.exports = PhylacteryLich;