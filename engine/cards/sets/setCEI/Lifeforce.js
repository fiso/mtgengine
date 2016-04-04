"use strict";
const Constants = require ("../../../Constants");
const LifeforceBase = require("../setCED/Lifeforce");

class Lifeforce extends LifeforceBase {
  constructor(game) {
    super(game, "Lifeforce", "International Collector's Edition", "CEI");
  }
}

module.exports = Lifeforce;
