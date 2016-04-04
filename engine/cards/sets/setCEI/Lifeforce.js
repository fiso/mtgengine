"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LifeforceBase = require("../setCED/Lifeforce.js");

class Lifeforce extends LifeforceBase {
  constructor(game) {
    super(game, "Lifeforce", "International Collector's Edition", "CEI");
  }
}

module.exports = Lifeforce;
