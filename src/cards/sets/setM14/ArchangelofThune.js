"use strict";
const Constants = require ("../../../Constants");
const ArchangelofThuneBase = require("../setIMA/ArchangelofThune");

class ArchangelofThune extends ArchangelofThuneBase {
  constructor (game) {
    super(game, "Archangel of Thune", "Magic 2014", "M14");
  }
}

module.exports = ArchangelofThune;
