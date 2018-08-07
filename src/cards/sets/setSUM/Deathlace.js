"use strict";
const Constants = require ("../../../Constants");
const DeathlaceBase = require("../set4ED/Deathlace");

class Deathlace extends DeathlaceBase {
  constructor (game) {
    super(game, "Deathlace", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = Deathlace;
