"use strict";
const Constants = require ("../../../Constants");
const LifeforceBase = require("../setME4/Lifeforce");

class Lifeforce extends LifeforceBase {
  constructor (game) {
    super(game, "Lifeforce", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Lifeforce;
