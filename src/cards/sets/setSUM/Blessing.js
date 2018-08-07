"use strict";
const Constants = require ("../../../Constants");
const BlessingBase = require("../setM14/Blessing");

class Blessing extends BlessingBase {
  constructor (game) {
    super(game, "Blessing", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = Blessing;
