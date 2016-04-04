"use strict";
const Constants = require ("../../../Constants");
const AspectofWolfBase = require("../setCED/AspectofWolf");

class AspectofWolf extends AspectofWolfBase {
  constructor(game) {
    super(game, "Aspect of Wolf", "Revised Edition", "3ED");
  }
}

module.exports = AspectofWolf;
