"use strict";
const Constants = require ("../../../Constants");
const HillGiantBase = require("../setDPA/HillGiant");

class HillGiant extends HillGiantBase {
  constructor (game) {
    super(game, "Hill Giant", "Collectors’ Edition", "CED");
  }
}

module.exports = HillGiant;
