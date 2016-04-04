"use strict";
const Constants = require ("../../../Constants");
const LifeforceBase = require("../setCED/Lifeforce");

class Lifeforce extends LifeforceBase {
  constructor(game) {
    super(game, "Lifeforce", "Fourth Edition", "4ED");
  }
}

module.exports = Lifeforce;
