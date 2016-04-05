"use strict";
const Constants = require ("../../../Constants");
const PhylacteryLichBase = require("../setM11/PhylacteryLich");

class PhylacteryLich extends PhylacteryLichBase {
  constructor(game) {
    super(game, "Phylactery Lich", "Magic 2013", "M13");
  }
}

module.exports = PhylacteryLich;
