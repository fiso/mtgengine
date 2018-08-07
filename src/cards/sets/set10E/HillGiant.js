"use strict";
const Constants = require ("../../../Constants");
const HillGiantBase = require("../setDPA/HillGiant");

class HillGiant extends HillGiantBase {
  constructor (game) {
    super(game, "Hill Giant", "Tenth Edition", "10E");
  }
}

module.exports = HillGiant;
