"use strict";
const Constants = require ("../../../Constants");
const HillGiantBase = require("../setDPA/HillGiant");

class HillGiant extends HillGiantBase {
  constructor (game) {
    super(game, "Hill Giant", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = HillGiant;
