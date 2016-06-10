"use strict";
const Constants = require ("../../../Constants");
const AspectofWolfBase = require("../setCED/AspectofWolf");

class AspectofWolf extends AspectofWolfBase {
  constructor (game) {
    super(game, "Aspect of Wolf", "Fourth Edition", "4ED");
  }
}

module.exports = AspectofWolf;
