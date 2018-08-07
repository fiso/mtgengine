"use strict";
const Constants = require ("../../../Constants");
const PhylacteryLichBase = require("../setM19/PhylacteryLich");

class PhylacteryLich extends PhylacteryLichBase {
  constructor (game) {
    super(game, "Phylactery Lich", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = PhylacteryLich;
