"use strict";
const Constants = require ("../../../Constants");
const LifeforceBase = require("../setCED/Lifeforce");

class Lifeforce extends LifeforceBase {
  constructor(game) {
    super(game, "Lifeforce", "Masters Edition IV", "ME4");
  }
}

module.exports = Lifeforce;
