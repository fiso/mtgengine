"use strict";
const Constants = require ("../../../Constants");
const LifeforceBase = require("../setME4/Lifeforce");

class Lifeforce extends LifeforceBase {
  constructor (game) {
    super(game, "Lifeforce", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = Lifeforce;
