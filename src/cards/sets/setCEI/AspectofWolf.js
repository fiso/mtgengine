"use strict";
const Constants = require ("../../../Constants");
const AspectofWolfBase = require("../setCED/AspectofWolf");

class AspectofWolf extends AspectofWolfBase {
  constructor (game) {
    super(game, "Aspect of Wolf", "International Collector's Edition", "CEI");
  }
}

module.exports = AspectofWolf;
