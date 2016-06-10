"use strict";
const Constants = require ("../../../Constants");
const WarPriestofThuneBase = require("../setM11/WarPriestofThune");

class WarPriestofThune extends WarPriestofThuneBase {
  constructor (game) {
    super(game, "War Priest of Thune", "Magic 2013", "M13");
  }
}

module.exports = WarPriestofThune;
