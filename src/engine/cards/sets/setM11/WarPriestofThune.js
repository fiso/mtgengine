"use strict";
const Constants = require ("../../../Constants");
const WarPriestofThuneBase = require("../setEMA/WarPriestofThune");

class WarPriestofThune extends WarPriestofThuneBase {
  constructor (game) {
    super(game, "War Priest of Thune", "Magic 2011", "M11");
  }
}

module.exports = WarPriestofThune;
